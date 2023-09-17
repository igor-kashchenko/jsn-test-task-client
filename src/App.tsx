import React from "react";
import { router } from "@/router";
import { RouterProvider } from "react-router-dom";

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
