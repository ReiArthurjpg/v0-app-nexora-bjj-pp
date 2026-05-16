import Cookies from 'js-cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export async function fetchApi(endpoint: string, options: RequestInit & { baseUrl?: string } = {}) {
  const token = Cookies.get('nexora_token');
  const { baseUrl, ...fetchOptions } = options;
  const finalBaseUrl = baseUrl || API_URL;
  
  const headers = new Headers(fetchOptions.headers);
  
  // Se for POST e não tiver Content-Type definido, usamos application/json
  if (fetchOptions.method === 'POST' && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  } else if (!headers.has('Content-Type')) {
    // Fallback para evitar preflight em outros casos (InfinityFree)
    headers.set('Content-Type', 'text/plain');
  }
  
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const config: RequestInit = {
    ...fetchOptions,
    headers,
  };

  // Chamada direta para a API, sem o proxy do Vercel
  const response = await fetch(`${finalBaseUrl}${endpoint}`, config);

  if (response.status === 401) {
    Cookies.remove('nexora_token');
    if (typeof window !== 'undefined' && !window.location.pathname.startsWith('/login')) {
      window.location.href = '/login';
    }
    throw new Error('Unauthorized');
  }

  return response;
}
