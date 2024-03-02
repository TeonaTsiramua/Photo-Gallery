import { Outlet } from 'react-router-dom';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Outlet />
    </div>
  );
}
