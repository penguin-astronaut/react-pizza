import React from 'react';
import { IPizza } from './PizzaConfigurator';

interface IPizzaOrderProps {
  pizza: IPizza;
}

export const PizzaOrder = ({ pizza }: IPizzaOrderProps) => (
  <div>
    <h2>Ваш заказ:</h2>
    <p>Размер: {pizza.size}</p>
    <p>Тесто: {pizza.dough}</p>
    <p>Сыр: {pizza.cheese.join(',')}</p>
    <p>Мясо: {pizza.meat.join(',')}</p>
    <p>Овощи: {pizza.vegetables.join(',')}</p>
    <button>Оплатить</button>
  </div>
);
