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
    <p>
      Сыр: {pizza.cheese.length === 0 ? 'Без сыра' : pizza.cheese.join(',')}
    </p>
    <p>Мясо: {pizza.meat.length === 0 ? 'Без мяса' : pizza.meat.join(',')}</p>
    <p>
      Овощи:{' '}
      {pizza.vegetables.length === 0
        ? 'Без овощей'
        : pizza.vegetables.join(',')}
    </p>
    <p>Сумма: {pizza.price}</p>
    <button>Оплатить</button>
  </div>
);
