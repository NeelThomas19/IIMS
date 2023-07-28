import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
// import Register from './Components/Register/Register';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='dashboard' element={<Dashboard />}/>
      {/* <Route path='register' element={<Register />}/> */}
    </Routes>
    </BrowserRouter>
  );
};

export default App;
