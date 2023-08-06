import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Details from './components/pages/Details';
import Maininfo from './components/maininfo';
import Login from './components/pages/login';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} ></Route>
          <Route path='/services' element={<Services/>} ></Route>
          <Route path='/products' element={<Products/>}></Route> 
          <Route path='/sign-up' element={<SignUp/>} ></Route>
          <Route path='/details' element={<Details/>} ></Route>
          <Route path='/moreinfo' element={<Maininfo />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;