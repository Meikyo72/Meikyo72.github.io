import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing deep', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders without crashing shallow', () => {
		shallow(<App/>);
});
