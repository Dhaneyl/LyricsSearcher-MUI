import { Grid, Typography } from "@mui/material";
import React from "react";
import { NavBar } from "./NavBar";

export const Layout = ({ children}) => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: "100vh",
          backgroundColor: "error.main",
          padding: 4,
        }}
      >
        <Grid
          item
          className="box-shadow"
          xs={6}
          sx={{
            width: { md: 1000 },
            height: { md: 600 },
            backgroundColor: "white",
            padding: 5,
            borderRadius: 3,
            boxShadow: 7,
           
          }}
        >
            {children}

        </Grid>
      </Grid>
    </>
  );
};
