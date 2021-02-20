import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import NaoEncontrado from './NaoEncontrado';
import Login from './Login';

const App = () => {

  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

