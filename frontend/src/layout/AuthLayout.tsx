import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-gray-100 ">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        {/* Ceci rendra soit <Login />, soit <Register /> selon la route */}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
