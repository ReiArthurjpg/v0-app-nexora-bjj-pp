'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { authService, User } from '@/services/auth.service';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (data: any) => Promise<any>;
  logout: () => void;
  signup: (data: any) => Promise<any>;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    async function loadUser() {
      // Check for token in URL (useful for Social Login redirect)
      const params = new URLSearchParams(window.location.search);
      const urlToken = params.get('accessToken');
      
      if (urlToken) {
        Cookies.set('nexora_token', urlToken, { expires: 1 });
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
        
        // Success notification
        toast.success('Login social realizado com sucesso!');
        router.push('/hub');
      }

      const token = Cookies.get('nexora_token');
      if (token) {
        try {
          const userData = await authService.me();
          if ((userData as any).code === 'INVALID_TOKEN' || !userData.id) {
             throw new Error('Invalid token');
          }
          setUser(userData);
        } catch (error) {
          Cookies.remove('nexora_token');
          setUser(null);
        }
      }
      setIsLoading(false);
    }
    loadUser();
  }, [router]);

  const login = async (data: any) => {
    setIsLoading(true);
    try {
      const response = await authService.login(data);
      if (response.accessToken) {
        Cookies.set('nexora_token', response.accessToken, { expires: 1 }); // expires in 1 day
        setUser(response.user);
      }
      return response;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    authService.logout();
  };

  const signup = async (data: any) => {
    return authService.signup(data);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isLoading, isAuthenticated, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}
