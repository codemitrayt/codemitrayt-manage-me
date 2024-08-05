import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div className="bg-white min-h-screen w-screen overflow-hidden antialiased text-black">
      <Outlet />
    </div>
  );
};

export default RootLayout;
