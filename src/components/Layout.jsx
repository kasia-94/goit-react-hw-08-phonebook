import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Layout;
