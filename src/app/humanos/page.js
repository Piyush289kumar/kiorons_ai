import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth/auth';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function HumanosPage() {
  const cookieStore = await cookies(); // ✅ Await it
  const token = cookieStore.get('token')?.value;

  try {
    verifyToken(token);
  } catch {
    redirect('/login');
  }

  return <div>Welcome to Humanos (Protected Page)</div>;
}
