import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AdminHome() {
  const router = useRouter();
  useEffect(() => {
    router.push('/admin/dashboard');
  }, [router]);

  return null; // redirect만 함
}
