import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { PizzaConfiguratorForm } from './PizzaConfiguratorForm';
import { IPizza } from './PizzaConfigurator';

describe('PizzaConfiguratorForm', () => {
  it('render', () => {
    render(
      <PizzaConfiguratorForm
        setPizza={(() => {}) as React.Dispatch<React.SetStateAction<IPizza>>}
      />
    );

    expect(screen.getByText('Соберите пиццу')).toBeTruthy();
    expect(screen.getByText('Выберете тесто')).toBeTruthy();
    expect(screen.getByText('Выберете размер')).toBeTruthy();
    expect(screen.getByText('Выберете соус')).toBeTruthy();
    expect(screen.getByText('Добавьте сыр')).toBeTruthy();
    expect(screen.getByText('Добавьте овощи')).toBeTruthy();
    expect(screen.getByText('Добавьте мясо')).toBeTruthy();
    expect(screen.getByText('Заказать 250')).toBeTruthy();
  });

  it('change sum', () => {
    render(
      <PizzaConfiguratorForm
        setPizza={(() => {}) as React.Dispatch<React.SetStateAction<IPizza>>}
      />
    );

    fireEvent.click(screen.getByText('помидор'));
    fireEvent.click(screen.getByText('чеддер'));
    fireEvent.click(screen.getByText('грибы'));
    fireEvent.click(screen.getByText('ветчина'));

    expect(screen.getByText('Заказать 366')).toBeTruthy();

    fireEvent.click(screen.getByText('35'));
    expect(screen.getByText('Заказать 416')).toBeTruthy();
  });

  it('onSubmit', () => {
    const createPizza = jest.fn();

    render(
      <PizzaConfiguratorForm
        setPizza={createPizza as React.Dispatch<React.SetStateAction<IPizza>>}
      />
    );

    fireEvent.click(screen.getByText('тонкое'));
    fireEvent.click(screen.getByText('помидор'));
    fireEvent.click(screen.getByText('чеддер'));
    fireEvent.click(screen.getByText('грибы'));
    fireEvent.click(screen.getByText('ветчина'));
    fireEvent.click(screen.getByText('35'));
    fireEvent.click(screen.getByText('Заказать 416'));

    expect(createPizza).toHaveBeenCalledWith({
      size: 35,
      dough: 'тонкое',
      sauce: 'томатный',
      cheese: ['чеддер'],
      vegetables: ['помидор', 'грибы'],
      meat: ['ветчина'],
      price: 416,
    });
  });
});
