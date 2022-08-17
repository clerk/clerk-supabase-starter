import { Outlet } from 'react-router-dom';
import Header from './Header';
import '../styles/Layout.css';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
