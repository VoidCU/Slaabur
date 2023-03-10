import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Aboutus  from './pages/Aboutus';
import Nopage from './pages/nopage';
import Navbar from './pages/Navbar';
import Profile from './pages/Profile';
import './css/App.css'

function App() {
  return (
      <div className='sab-ka-baap'>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/*' element={<Nopage/>}/>
        </Routes>
      </div>
      
  );
}

export default App