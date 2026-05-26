import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { authService } from '@/services/auth.service';

interface ChatForgotPasswordFormProps {
  /** Optional callback after successful request */
  onSuccess?: () => void;
  onLoadingChange?: (loading: boolean) => void;
}

export function ChatForgotPasswordForm({ onSuccess, onLoadingChange }: ChatForgotPasswordFormProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Informe seu e‑mail');
      return;
    }

    setIsLoading(true);
    onLoadingChange?.(true);
    try {
      // Assume authService.forgotPassword exists and returns a promise
      const response = await authService.forgotPassword(email);
      // Show generic success message to avoid leaking account existence
      toast.success(
        response?.message ||
          'Se houver uma conta associada ao e‑mail, enviamos um link para redefinir a senha.'
      );
      if (onSuccess) onSuccess();
    } catch (error: any) {
      toast.error(error?.message || 'Erro ao solicitar redefinição de senha');
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
            placeholder="Seu e‑mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="h-9 text-sm"
          />
        </div>
        <Button type="submit" disabled={isLoading} size="sm" className="w-full mt-1">
          {isLoading ? 'Enviando...' : 'Recuperar senha'}
        </Button>
      </form>
    </div>
  );
}
