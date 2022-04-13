import Navbar from 'globalComponents/Navbar';
import { Outlet } from 'react-router-dom';

export default function AuthorizedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
