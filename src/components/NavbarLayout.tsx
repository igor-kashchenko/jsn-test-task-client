import React from "react";
import { Outlet } from "react-router-dom";
import { AppContainer } from "./AppContainer";
import { Navbar } from "./Navbar";

export const NavbarLayout: React.FC = () => {
  return (
    <>
      <Navbar />

      <AppContainer>
        <Outlet />
      </AppContainer>
    </>
  );
};
