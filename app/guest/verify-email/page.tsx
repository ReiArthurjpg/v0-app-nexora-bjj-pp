import { Suspense } from 'react';
import { VerifyEmailController } from '@/feature/guest/verify-email';

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#070708]" />}>
      <VerifyEmailController />
    </Suspense>
  );
}
