import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBarBox } from './AppBar/AppBar';

const Layout = () => {
  return (
    <div>
      <AppBarBox />
      <Outlet />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Layout;
