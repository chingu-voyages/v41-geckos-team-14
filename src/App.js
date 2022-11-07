import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/landing';
import Login from './pages/login';
import Signup from './pages/signup';
import Kanban from './pages/kanban';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/login" element={<Login />} > </Route>
        <Route exact path="/signup" element={<Signup />} > </Route>
        <Route exact path="/dashboard" element={<Kanban />} > </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
