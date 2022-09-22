import { Container, Typography } from "@mui/material";
import React, { Children } from "react";
import { useLyrics } from "../hooks";
import { Layout } from "./Layout";


export const SongLyrics = ({ children }) => {
  const {search } =useLyrics()
  const {artist, song} = search
  return (
    <Layout>
      <Typography variant="h4" textAlign="center" color="primary" lineHeight="1">{artist}</Typography>
      <Typography variant="h6" lineHeight="2">{song}</Typography>
      <Typography variant="body2">
        {children}
      </Typography>

    </Layout>
  );
};
