import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/authentication/LoginPage';
import BookingPage from './components/BookingPage';
import {isLoggedIn} from './services/authenticationService'


function App() {

  return (
    <>
      <BrowserRouter>
        <div className='bg-[#2D2D2D] min-h-screen'>
        <Header/>
          <Routes>
            {
              isLoggedIn() ? 
              <>
                <Route path='/' element={<Home/>}/>
                <Route path='/bookingPage' element={<BookingPage/>}/>
              </>
              :
              <>
                <Route path='/' element={<LoginPage/>}/>
              </>
            }
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App
