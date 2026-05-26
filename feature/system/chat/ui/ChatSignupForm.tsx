import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { authService } from '@/services/auth.service';

interface ChatSignupFormProps {
  onSuccess?: () => void;
  onLoadingChange?: (loading: boolean) => void;
}

export function ChatSignupForm({ onSuccess, onLoadingChange }: ChatSignupFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [academyName, setAcademyName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !academyName || !password || !confirmPassword) {
      toast.error('Preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem');
      return;
    }

    if (password.length < 8) {
      toast.error('A senha deve ter pelo menos 8 caracteres');
      return;
    }

    setIsLoading(true);
    onLoadingChange?.(true);
    try {
      const response = await authService.signup({
        name,
        email,
        academy_name: academyName,
        password,
        confirmPassword,
      });

      if (response && (response.success || response.id)) {
        toast.success('Conta criada com sucesso! Faça login para começar.');
        if (onSuccess) onSuccess();
        router.push('/guest/login');
      } else {
        toast.error(response?.message || 'Erro ao realizar cadastro.');
      }
    } catch (error: any) {
      toast.error(error.message || 'Erro ao realizar cadastro');
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
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
            className="h-9 text-sm"
          />
        </div>
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
            type="text"
            placeholder="Nome da academia"
            value={academyName}
            onChange={(e) => setAcademyName(e.target.value)}
            disabled={isLoading}
            className="h-9 text-sm"
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Senha (mín. 8 caracteres)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className="h-9 text-sm"
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isLoading}
            className="h-9 text-sm"
          />
        </div>
        <Button type="submit" disabled={isLoading} size="sm" className="w-full mt-1">
          {isLoading ? 'Cadastrando...' : 'Cadastrar'}
        </Button>
      </form>
    </div>
  );
}
