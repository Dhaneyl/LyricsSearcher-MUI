import React from "react";
import { useLyrics } from "./useLyrics";
import { useSongState } from "./useSongState";

export const useSubmit = () => {
  // const { search, setSearch } = useSongState();
  const { setAlert, lyricsSearch, search } = useLyrics();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes('')) {
      setAlert(true);
      
      
      return
      
    } 
    lyricsSearch(search);

    setAlert(false);
  };
  return {
    handleSubmit,
  };
};
