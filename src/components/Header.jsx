import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import logo from "../img/logo-upsa-web.webp";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#027333", // Verde UPSA
        height: "100px",
        display: "flex",
        justifyContent: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box
          component="img"
          src={logo}
          alt="UPSA Logo"
          sx={{
            height: "80px",
            marginLeft: "16px",
          }}
        />
        <Typography
          variant="h4"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            textAlign: "right",
            marginRight: "16px",
            fontSize: "28px",
            color: "#FFFFFF",
            fontFamily: "'Roboto Slab', serif",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          Exchange of Knowledge
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
