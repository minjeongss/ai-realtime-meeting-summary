import { Outlet } from "react-router";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="pt-5 pb-5 pl-40 pr-40">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
