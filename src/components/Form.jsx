import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

import {useLyrics, useSongState, useSubmit} from "../hooks"
import { Layout } from "./Layout";

export const Form = ({children}) => {
//  const {search, handleSearch} = useSongState()
  const {search, handleSearch} = useLyrics()
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
                label="artist"
                name="artist"
                size="small"
                type="text"
                placeholder="write the artist's name"
                value={artist}
                onChange={handleSearch}
                
               fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3} sx={{ width: { xs: 250 } }}>
              <TextField
                 label="song"
                name="song"
                size="small"
                type="text"
                placeholder="write the song's name"
                value={song}
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
        <Typography sx={{mb:3}}>{children}</Typography>
      </Layout>
    </>
  );
};
