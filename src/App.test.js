import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a specific link in App component', () => {
  render(<App />);
  const linkElement = screen.getByTestId('specific-link');
  expect(linkElement).toBeInTheDocument();
});
