import { NavbarLayout } from "@/components/NavbarLayout";
import { AboutPage } from "@/modules/AboutPage";
import { AddHeroPage } from "@/modules/AddHeroPage";
import { HomePage } from "@/modules/HomePage";
import { Navigate, createHashRouter } from "react-router-dom";

export const router = createHashRouter([
  {
    element: <NavbarLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/superheroes/:id",
        element: <AboutPage />,
      },
      {
        path: "/superheroes/add",
        element: <AddHeroPage />,
      },
      {
        path: "/home",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
