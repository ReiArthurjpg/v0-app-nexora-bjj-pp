import Cookies from 'js-cookie';

// No browser: usa /nexora-api (proxy do Next.js → sem CORS)
// No servidor (SSR): usa a URL direta da API
function getBaseUrl(): string {
  if (typeof window !== 'undefined') {
    return '/nexora-api';
  }
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
}

export async function fetchApi(endpoint: string, options: RequestInit = {}) {
  const token = Cookies.get('nexora_token');
  
  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');
  
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const config: RequestInit = {
    ...options,
    headers,
  };

  const response = await fetch(`${getBaseUrl()}${endpoint}`, config);

  if (response.status === 401) {
    Cookies.remove('nexora_token');
    if (typeof window !== 'undefined' && !window.location.pathname.startsWith('/login')) {
      window.location.href = '/login';
    }
    throw new Error('Unauthorized');
  }

  return response;
}
