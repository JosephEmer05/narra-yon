import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the navigation links', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  
  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();
});
