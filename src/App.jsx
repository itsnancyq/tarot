import { useEffect, useState } from 'react'
import './App.css'
import AllCards from './components/AllCards'

function App() {


  return (
    <>
    <h1>LEARNING ABOUT TAROT </h1>

    <Routes>
      <Route path="/cards" element={<AllCards/>}/>
    </Routes>
    </>
  )
}

export default App
