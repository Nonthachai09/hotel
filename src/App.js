import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Carousel1 from './page/Carousel1';
import Home from './Homepage/Home';
import Hotel from './Homepage/hotel';
import HotelBooking from './Homepage/HotelBooking'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar /> 

        <Routes> 
          <Route path="/home" element={<Home />} /> 
          <Route path="/hotel" element={<Hotel />} /> 
          <Route path="/booking" element={<HotelBooking />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
