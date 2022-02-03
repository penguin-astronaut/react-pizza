import { fireEvent, render, screen } from '@testing-library/react';
import { PizzaConfigurator } from './PizzaConfigurator';

describe('PizzaConfigurator', () => {
  it('pizza form', () => {
    render(<PizzaConfigurator />);
    expect(screen.getByText('Соберите пиццу')).toBeTruthy();
    expect(screen.queryByText('Ваш заказ:')).not.toBeTruthy();
  });

  it('get pizza order', () => {
    render(<PizzaConfigurator />);

    fireEvent.click(screen.getByText('Заказать 250'));

    expect(screen.queryByText('Соберите пиццу')).not.toBeTruthy();
    expect(screen.getByText('Ваш заказ:')).toBeTruthy();
  });
});
