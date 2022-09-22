import axios from "axios";
import { useState } from "react";
import { LyricsContext } from "./LyricsContext";



export const LyricsProvider = ({children}) => {
    const [alert, setAlert] = useState(false)
    const [search, setsearch] = useState({
      artist: '',
      song: '',
    });
    // Inputs values
    const handleSearch = ({target}) => {
      // debugger
      const { name, value } = target;
      setsearch({
        ...search,
        [name]: value
      });
    };
    // API
    const lyricsSearch =  async (searching) =>{
      try{
         const {artist, song} = searching;
         const url = `https://api.lyrics.ovh/v1/${artist}/${song}`
         const result = await axios (url)
         console.log(result);
      }
      catch (err){
        console.log(err);
      }
      
    }

  return (
    <LyricsContext.Provider
    value={{
        alert,
        setAlert,
        lyricsSearch,
        search,
        handleSearch,
    }}>
    {children}

    </LyricsContext.Provider>
  )
}
