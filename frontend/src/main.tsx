import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Register from "./pages/Register.tsx";
import AuthLayout from "./layout/AuthLayout.tsx";
import Dashboard from "./components/UserCard.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import Login from "./pages/Login.tsx";
import MainLayout from "./layout/MainLayout.tsx";
import VerifyEmail from "./pages/VerifyEmail.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/profile" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
