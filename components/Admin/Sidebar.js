import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Sidebar.module.css';

export default function AdminSidebar() {
    const router = useRouter();
    const { pathname } = router;
    console.log(pathname);
    return (
        <aside className={styles.sidebar}>
            <h2>Admin</h2>
            <nav>
                <ul>
                    <li className={pathname === '/admin/dashboard' ? styles.active : ''}><Link href="/admin/dashboard">Dashboard</Link></li>
                    <li className={pathname === '/admin/slogan' ? styles.active : ''}><Link href="/admin/slogan">슬로건 관리</Link></li>
                    <li className={pathname === '/admin/about' ? styles.active : ''}><Link href="/admin/about">About 관리</Link></li>
                    <li className={pathname === '/admin/history' ? styles.active : ''}><Link href="/admin/history">연혁 관리</Link></li>
                </ul>
            </nav>
        </aside>
    );
}
