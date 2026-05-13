import Cookies from 'js-cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export async function fetchApi(endpoint: string, options: RequestInit = {}) {
  const token = Cookies.get('nexora_token');
  
  const headers = new Headers(options.headers);
  // Usamos text/plain para evitar o CORS preflight (OPTIONS) que o InfinityFree bloqueia
  headers.set('Content-Type', 'text/plain');
  
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const config: RequestInit = {
    ...options,
    headers,
  };

  // Chamada direta para a API, sem o proxy do Vercel
  const response = await fetch(`${API_URL}${endpoint}`, config);

  if (response.status === 401) {
    Cookies.remove('nexora_token');
    if (typeof window !== 'undefined' && !window.location.pathname.startsWith('/login')) {
      window.location.href = '/login';
    }
    throw new Error('Unauthorized');
  }

  return response;
}
