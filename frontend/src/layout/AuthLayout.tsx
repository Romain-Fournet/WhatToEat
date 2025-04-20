import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-gray-100 ">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
