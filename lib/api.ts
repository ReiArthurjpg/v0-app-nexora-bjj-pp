import Cookies from 'js-cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

let isRefreshing = false;
let refreshQueue: Array<(token: string) => void> = [];

async function attemptRefresh(): Promise<string | null> {
  const refreshToken = Cookies.get('nexora_refresh');
  if (!refreshToken) return null;

  try {
    const res = await fetch(`${API_URL}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken }),
    });

    if (!res.ok) return null;

    const data = await res.json();
    if (data.accessToken) {
      Cookies.set('nexora_token', data.accessToken, { expires: 1 });
      if (data.refreshToken) {
        Cookies.set('nexora_refresh', data.refreshToken, { expires: 7 });
      }
      return data.accessToken;
    }
  } catch {
    // Silent fail
  }
  return null;
}

export async function fetchApi(endpoint: string, options: RequestInit & { baseUrl?: string } = {}) {
  const token = Cookies.get('nexora_token');
  const { baseUrl, ...fetchOptions } = options;
  const finalBaseUrl = baseUrl || API_URL;

  const buildHeaders = (tok?: string) => {
    const headers = new Headers(fetchOptions.headers);

    if (fetchOptions.method === 'POST' && !headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json');
    } else if (!headers.has('Content-Type')) {
      headers.set('Content-Type', 'text/plain');
    }

    const activeToken = tok || token;
    if (activeToken) {
      headers.set('Authorization', `Bearer ${activeToken}`);
    }

    return headers;
  };

  const doFetch = (tok?: string) =>
    fetch(`${finalBaseUrl}${endpoint}`, {
      ...fetchOptions,
      headers: buildHeaders(tok),
    });

  let response = await doFetch();

  // Silent refresh on 401
  if (response.status === 401) {
    if (!isRefreshing) {
      isRefreshing = true;
      const newToken = await attemptRefresh();
      isRefreshing = false;

      if (newToken) {
        // Flush queue
        refreshQueue.forEach(cb => cb(newToken));
        refreshQueue = [];
        // Retry original request
        response = await doFetch(newToken);
      } else {
        // Truly unauthorized — redirect to login
        refreshQueue = [];
        Cookies.remove('nexora_token');
        Cookies.remove('nexora_refresh');
        if (typeof window !== 'undefined' && !window.location.pathname.startsWith('/guest/login')) {
          window.location.href = '/guest/login';
        }
        throw new Error('Unauthorized');
      }
    } else {
      // Wait for the in-progress refresh
      const newToken = await new Promise<string>((resolve) => {
        refreshQueue.push(resolve);
      });
      response = await doFetch(newToken);
    }
  }

  return response;
}
