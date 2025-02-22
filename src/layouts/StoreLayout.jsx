import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/HeaderStore';

const routes = [
  {
    path: "/list",
    name: "List",
  },
];

const StoreLayout = () => {
  return (
    <div>
      <Header routes={routes} />
      <Outlet />
      <Footer />
    </div>
  );
};


export default StoreLayout;
