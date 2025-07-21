import {Navigation} from '../Navigation/naviagtion'
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);

export default Layout;
