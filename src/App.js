
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/landing';
import Login from './pages/login';
import Signup from './pages/signup';
import React from 'react';
import TodoApp from './pages/TodoApp';
import Dashboard from './pages/dashboard';



function App() {


  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/login" element={<Login />} > </Route>
        <Route exact path="/signup" element={<Signup />} > </Route>
        <Route exact path="/dashboard" element={<Dashboard />} > </Route>
        <Route exact path="/TodoApp" element={<TodoApp />} > </Route>
      </Routes>
    </HashRouter>
  );

}

export default App;
