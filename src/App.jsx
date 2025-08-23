import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Cards from './components/AllCards'
import Home from './components/Home'
import SingleCard from './components/SingleCard'

function App() {


  return (
    <>
    <h1>TarotUI</h1>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cards" element={<Cards/>}/>
      <Route path="/cards/:cardId" element={<SingleCard/>}/>
    </Routes>
    </>
  )
}

export default App
