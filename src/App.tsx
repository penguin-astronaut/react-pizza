import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PizzaConfigurator } from './PizzaConfigurator/PizzaConfigurator';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PizzaConfigurator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
