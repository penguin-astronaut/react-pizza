import React from 'react';
import { screen, render } from '@testing-library/react';
import { PizzaOrder } from './PizzaOrder';

describe('Pizza Order', () => {
  it('all ingredients', () => {
    const pizza = {
      size: 35,
      dough: 'тонкое',
      sauce: 'томатный',
      cheese: ['моцарелла', 'чеддер', 'дор блю'],
      vegetables: ['помидор', 'грибы', 'перец'],
      meat: ['бекон', 'пепперони', 'ветчина'],
      price: 450,
    };

    render(<PizzaOrder pizza={pizza} />);
    expect(screen.getByText(`Размер: ${pizza.size}`)).toBeTruthy();
    expect(screen.getByText(`Тесто: ${pizza.dough}`)).toBeTruthy();
    expect(screen.getByText(`Соус: ${pizza.sauce}`)).toBeTruthy();
    expect(screen.getByText(`Сыр: ${pizza.cheese.join(',')}`)).toBeTruthy();
    expect(screen.getByText(`Мясо: ${pizza.meat.join(',')}`)).toBeTruthy();
    expect(
      screen.getByText(`Овощи: ${pizza.vegetables.join(',')}`)
    ).toBeTruthy();
    expect(screen.getByText(`Сумма: ${pizza.price}`)).toBeTruthy();
    expect(screen.getByText('Оплатить')).toBeTruthy();
  });
  it('no cheese', () => {
    const pizza = {
      size: 35,
      dough: 'тонкое',
      sauce: 'томатный',
      cheese: [],
      vegetables: ['помидор', 'грибы', 'перец'],
      meat: ['бекон', 'пепперони', 'ветчина'],
      price: 450,
    };

    render(<PizzaOrder pizza={pizza} />);
    expect(screen.getByText('Сыр: Без сыра')).toBeTruthy();
  });
});
