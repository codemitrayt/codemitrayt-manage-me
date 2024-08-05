import { Outlet } from "react-router-dom";

import SiteHeader from "../components/shared/site-header";
import SiteFooter from "../components/shared/site-footer";

const GuestLayout = () => {
  return (
    <div className="bg-background relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  );
};

export default GuestLayout;
