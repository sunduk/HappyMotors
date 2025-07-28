import AdminStyles from '../../components/Admin/Admin.module.css';

import AdminLayout from '../../components/Admin/Layout';
import SloganForm from '../../components/Admin/SloganForm';
import MainVideoForm from '../../components/Admin/MainVideoForm';

export default function MainPage() {
  return (
    <AdminLayout>
      <h1 className={AdminStyles.titleBar}>메인페이지 관리</h1>
      <div className={AdminStyles.contentBox}>
        <SloganForm />
        <br /><br />
        <MainVideoForm />
      </div>
    </AdminLayout>
  );
}
