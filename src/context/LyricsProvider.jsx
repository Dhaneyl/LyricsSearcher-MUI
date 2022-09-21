import axios from "axios";
import { useState } from "react";
import { LyricsContext } from "./LyricsContext";



export const LyricsProvider = ({children}) => {
    const [alert, setAlert] = useState(false)
    const lyricsSearch = (search) =>{
      console.log(search);
    }

  return (
    <LyricsContext.Provider
    value={{
        alert,
        setAlert,
        lyricsSearch
    }}>
    {children}

    </LyricsContext.Provider>
  )
}
