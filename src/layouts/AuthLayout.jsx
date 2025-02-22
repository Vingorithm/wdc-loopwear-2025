import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';

const routes = [
  {
    path: "/login",
    name: "Login",
  },
];

const AuthLayout = () => {
  return (
    <div>
      {/* <Header routes={routes} /> */}
      <Outlet />
      <Footer />
    </div>
  );
};


export default AuthLayout;
