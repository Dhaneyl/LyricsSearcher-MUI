import React from 'react'
import {  Alertt, Form, NavBar, SongLyrics, } from '../components'


import { useLyrics } from '../hooks'


export const AppLyrics = () => {
  const {alert} = useLyrics()
  return (
    <>
    <NavBar/>
   <Form>  {alert && <Alertt/>} </Form>
   {/* <SongLyrics>Tempor incididunt ipsum nisi labore aliquip labore minim nulla incididunt sit dolore amet velit non. Culpa cupidatat veniam dolor incididunt id exercitation. Elit minim aliqua id aliqua velit voluptate cupidatat consectetur et minim aliqua ex deserunt in. Ad eiusmod sit magna id proident quis ut tempor.</SongLyrics> */}
  
   
   </>
  )
}
