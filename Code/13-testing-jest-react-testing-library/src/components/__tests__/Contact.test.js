import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

test('Should load Contact component', () => {
  render(<Contact />);
  const heading = screen.getByRole('heading');

  expect(heading).toBeInTheDocument();
});

test('Should load 2 text boxes(Input box) on Contact us Page', () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole('textbox');
  expect(inputBoxes.length).toBe(2);
});
