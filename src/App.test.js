import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MyDestinyCard title', () => {
  render(<App />);
  const linkElement = screen.getByText(/MyDestinyCard/i);
  expect(linkElement).toBeInTheDocument();
});
