import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/auth.service';

interface ChatLoginFormProps {
  onSuccess?: () => void;
  onLoadingChange?: (loading: boolean) => void;
}

export function ChatLoginForm({ onSuccess, onLoadingChange }: ChatLoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setSession } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Preencha todos os campos');
      return;
    }

    setIsLoading(true);
    onLoadingChange?.(true);
    try {
      const response = await authService.login({ email, password });
      if (response && response.accessToken) {
        setSession(response.accessToken, response.user);
        toast.success('Login realizado com sucesso!');
        if (onSuccess) onSuccess();
        router.push('/hub');
      } else {
        toast.error(response?.message || 'Credenciais inválidas. Tente novamente.');
      }
    } catch (error: any) {
      toast.error(error.message || 'Erro ao realizar login');
    } finally {
      setIsLoading(false);
      onLoadingChange?.(false);
    }
  };

  return (
    <div className="mt-3 p-4 bg-background/50 rounded-lg border border-border/50">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <Input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="h-9 text-sm"
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className="h-9 text-sm"
          />
        </div>
        <Button type="submit" disabled={isLoading} size="sm" className="w-full mt-1">
          {isLoading ? 'Entrando...' : 'Entrar'}
        </Button>
      </form>
    </div>
  );
}
