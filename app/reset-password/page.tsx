import { ResetPasswordForm } from '@/components/reset-password-form';
import { redirect } from 'next/navigation';

export default async function ResetPasswordPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ token?: string }> 
}) {
  const { token } = await searchParams;

  if (!token) {
    redirect('/login');
  }

  return <ResetPasswordForm token={token} />;
}
