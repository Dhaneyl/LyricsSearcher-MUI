import React, { useContext } from 'react'
import { LyricsContext } from '../context'

export const useLyrics = () => {
    
  return (
    useContext(LyricsContext)
  )
}
