import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App, { helloWorld } from './App';

// test('it returns "hello world"', () => {
//   expect(helloWorld()).toBe("hello world");
//   expect(helloWorld()).not.toBe("");
// });

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('render without crashing', () => {
  render(<App />);
});


test('it has "Baseball Dashboard" h1', () => {
  const container = render(<App />);
  container.getByText("Baseball Dashboard");
});