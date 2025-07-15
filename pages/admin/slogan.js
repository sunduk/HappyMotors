import AdminLayout from '../../components/Admin/Layout';
import SloganForm from '../../components/Admin/SloganForm';

export default function SloganPage() {
  return (
    <AdminLayout>
      <h1>슬로건 관리</h1>
      <SloganForm />
    </AdminLayout>
  );
}
