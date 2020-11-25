import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Starter template link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Starter template/i);
  expect(linkElement).toBeInTheDocument();
});
