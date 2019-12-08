import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Display from './Display';


test('render without crashing', () => {
  render(<Display />);
});

test('it has "Balls" h2', () => {
    const container = render(<Display />);
    container.getByText("Balls:");
    
  });
