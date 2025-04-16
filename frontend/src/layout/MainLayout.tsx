import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

export default function MainLayout() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-gray-100 ">
      <NavBar />
      <Outlet />
    </div>
  );
}
