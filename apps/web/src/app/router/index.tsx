import { createBrowserRouter, Navigate } from "react-router-dom";

import PublicLayout from "@/layouts/PublicLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

import LandingPage from "@/features/landing/pages/LandingPage";

import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import InvitePage from "@/features/auth/pages/InvitePage";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/invite/:token",
        element: <InvitePage />,
      },
    ],
  },
  {
    path: "/app",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
    ],
  },
]);