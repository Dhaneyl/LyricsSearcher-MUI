import React from 'react'
import { Alertt, Form, NavBar } from '../components'
import { useLyrics } from '../hooks'


export const AppLyrics = () => {
  const {alert} = useLyrics()
  return (
    <>
    <NavBar/>
   <Form>  {alert && <Alertt/>} </Form>
  
   
   </>
  )
}
