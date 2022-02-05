import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { PizzaConfigurator } from './PizzaConfigurator/PizzaConfigurator';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import { Order } from './Order';
import { Orders } from './Oders';
import { Receipt } from './Receipt';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink className={'link'} to={'/'}>
          Конфигуратор
        </NavLink>
        <NavLink className={'link'} to={'/login'}>
          Войти
        </NavLink>
        <NavLink className={'link'} to={'/register'}>
          Регистрация
        </NavLink>
        <NavLink className={'link'} to={'/order'}>
          Заказ
        </NavLink>
        <NavLink className={'link'} to={'/orders'}>
          История заказов
        </NavLink>
        <NavLink className={'link'} to={'/receipt'}>
          Чек
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<PizzaConfigurator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/order" element={<Order />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </div>
  );
}

export default App;
