import ResetPasswordForm from '@/feature/guest/login/reset-password';
import { redirect } from 'next/navigation';

export default async function ResetPasswordPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ token?: string }> 
}) {
  const { token } = await searchParams;

  if (!token) {
    redirect('/guest/login');
  }

  return <ResetPasswordForm token={token} />;
}
