import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Cards from './components/AllCards'
import Home from './components/Home'

function App() {


  return (
    <>
    <h1>LEARNING ABOUT TAROT </h1>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cards" element={<Cards/>}/>
    </Routes>
    </>
  )
}

export default App
