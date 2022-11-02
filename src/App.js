import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/landing';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/login" element={<Login />} > </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
