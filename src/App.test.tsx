import { render } from '@testing-library/react';
import App, { label } from './App';

test('render hello world', () => {
  render(<App />);
});

test("generates a label", () => {
  const result = label("React");
  expect(result).toEqual("Hello React");
})