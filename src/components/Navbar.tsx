import React from "react";
import { Link, useNavigate } from "react-router-dom";
import navlogo from "@/assets/navlogo.png";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Box
        maxWidth={"1440px"}
        m={"0 auto"}
        display={"flex"}
        width={"100%"}
        px={2}
        boxSizing={"border-box"}
        alignItems="center"
        justifyContent={'space-between'}
      >
        <Button sx={{ p: 0, cursor: "pointer" }} onClick={navigateHome}>
          <Box
            component={"img"}
            src={navlogo}
            alt="header logo"
            width={50}
            height={40}
          />
        </Button>

        <Toolbar>
          <Button
            component={Link}
            to="superheroes/add"
            color="inherit"
            sx={{ fontSize: "22px" }}
          >
            Add superhero
          </Button>
        </Toolbar>
      </Box>
    </AppBar>
  );
};
