import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/HeaderList';

const routes = [
  {
    path: "/list",
    name: "List",
  },
];

const ListLayout = () => {
  return (
    <div>
      <Header routes={routes} />
      <Outlet />
      <Footer />
    </div>
  );
};


export default ListLayout;
