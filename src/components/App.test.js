import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('The App gets rendered into the DOM', () => { 

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

});

