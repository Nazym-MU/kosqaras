import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';


export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { userId, sessionClaims } = await auth();
  const isAdmin = sessionClaims?.role === 'admin';

  if (!userId || !isAdmin) {
    redirect('/');
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      {children}
    </div>
  )
}