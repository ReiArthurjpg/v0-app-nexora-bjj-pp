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
  setSession: (token: string, user: User) => void;
  logout: () => void;
  signup: (data: any) => Promise<any>;
  updateProfile: (data: any) => Promise<any>;
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

  const setSession = (token: string, user: User) => {
    Cookies.set('nexora_token', token, { expires: 1 });
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    authService.logout();
  };

  const signup = async (data: any) => {
    return authService.signup(data);
  };

  const updateProfile = async (data: any) => {
    const result = await authService.updateProfile(data);
    if (result.user) {
      setUser(result.user);
    }
    return result;
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isLoading, isAuthenticated, setSession, logout, signup, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
