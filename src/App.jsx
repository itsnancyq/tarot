import './App.css';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Cards from './components/AllCards';
import Home from './components/Home';
import SingleCard from './components/SingleCard';
import NavBar from './components/NavBar';
import Suits from './components/Suits';
import SuitDetails from './components/SuitDetails';
import Courts from './components/Courts';
import CourtDetails from './components/CourtsDetails';
import tarotLogo from '/tarotLogo.png';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // hide nav bar and footer on landing page!
  const location = useLocation();
  const hideLayout = location.pathname === "/";

  return (
    <>
    <div className='libraryContainer'>
      <h1><img id='logo' src={tarotLogo}/>Tarot Treasury</h1>

      {!hideLayout && <NavBar />}

    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/cards" element={<Cards/>}/>
      <Route path="/cards/:cardId" element={<SingleCard/>}/>
      <Route path="/suits" element ={<Suits/>}/>
      <Route path="/suits/:suitName" element={<SuitDetails />}/>
      <Route path="/courts" element={<Courts/>}/>
      <Route path="/courts/:courtName" element={<CourtDetails/>}/>

    </Routes>

    </div>

    {!hideLayout && <Footer />}
    </>
  );
}

export default App;
