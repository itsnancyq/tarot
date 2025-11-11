import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Cards from './components/AllCards'
import Home from './components/Home'
import SingleCard from './components/SingleCard'
import NavBar from './components/NavBar'
import tarotLogo from './assets/tarotLogo.png'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <h1><img id='logo' src={tarotLogo}/>TarotUI</h1>

    <NavBar />

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cards" element={<Cards/>}/>
      <Route path="/cards/:cardId" element={<SingleCard/>}/>
    </Routes>

    <Footer />
    </>
  )
}

export default App
