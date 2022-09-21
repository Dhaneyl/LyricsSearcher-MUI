import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";

const drawerWidth = 0;

export const NavBar = () => {
  return (
    <>
      {/* Header of the app */}
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ margin: 3 }}
          >
            <Typography variant="h2" noWrap xs={6} sx={{color:'white', fontSize:50, fontWeight:'bold', textAlign:{xs:'center'}}}>
              {" "}
              Lyrics' songs Searcher
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* End of the header section */}
    
    </>
  );
};
