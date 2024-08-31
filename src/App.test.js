import { render, screen } from '@testing-library/react';
import App from './App';

test('renders mydestinycard title', () => {
  render(<App />);
  const linkElement = screen.getByText(/mydestinycard/i);
  expect(linkElement).toBeInTheDocument();
});
