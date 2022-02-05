import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('routing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('История заказов'));
    expect(screen.getByText('История заказов страница')).toBeTruthy();

    fireEvent.click(screen.getByText('Чек'));
    expect(screen.getByText('Страница с чеком')).toBeTruthy();
  });
});
