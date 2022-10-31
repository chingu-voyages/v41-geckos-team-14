import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/landing';
import Login from './pages/login';

function App() {
  return (
    // <div className="App">
    //   <Landing></Landing>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
