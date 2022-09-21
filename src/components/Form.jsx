import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Layout } from "./Layout";
import {useSongState, useSubmit} from "../hooks"

export const Form = ({children}) => {
 const {search, handleSearch} = useSongState()
 const {artist, song} = search;
 const {handleSubmit} = useSubmit()
  return (
    <>
      <Layout>
      <Typography variant="h4" color="black" sx={{mb:5, textAlign:"center"}}>Searchin artist and songs</Typography>
        <form 
        onSubmit={handleSubmit}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}

          >
            <Grid item xs={12} md={3} sx={{ width: { xs: 250 } }}>
              <TextField
                label="song"
                size="small"
                type="text"
                placeholder="write your song's name"
                
                onChange={handleSearch}
               fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3} sx={{ width: { xs: 250 } }}>
              <TextField
                label="artist"
                size="small"
                type="text"
                placeholder="write the artist's name"
                
                onChange={handleSearch}
                
                
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={2} sx={{ width: { xs: 250 } }}>
              <Button variant="contained" fullWidth type="submit" >
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  {" "}
                  Search{" "}
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
        {children}
      </Layout>
    </>
  );
};
