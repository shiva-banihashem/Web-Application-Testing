import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Dashboard />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
  
test('render without crashing', () => {
  render(<Dashboard />);
});

test('it has button Foul', () => {
    const container = render(<Dashboard />);
    container.getByText("Foul");
    
  });
