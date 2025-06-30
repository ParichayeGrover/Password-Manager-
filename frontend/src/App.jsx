import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Manager/>
    <Footer/>
    </BrowserRouter>
  )
}
 
export default App
