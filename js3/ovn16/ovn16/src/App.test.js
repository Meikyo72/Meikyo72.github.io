import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import Button from './Button.js';
import Form from './Form.js';

describe('App test suite', () =>{

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
    
test('Button clears name state', () => {
   //const butt = (<Button />);
   const app = mount(<App />);
    app.find('input [name="name"]').simulate('change', {target:{name:'name', value:'Petri'}});
    app.find("button").simulate('click');
    expect(app.state('name')).toBe('');
    
});
    
test('Button clears email state', () => {
   //const butt = (<Button />);
   const app = mount(<App />);
    app.find('input [name="email"]').simulate('change', {target:{name:'email', value:'Petri@some.com'}});
    app.find("button").simulate('click');
    expect(app.state('email')).toBe('');
    
});
    
test('name input sets state', () => {
    const app = mount(<App />);
    app.find('input [name="name"]').simulate('change', {target:{name:'name', value:'Petri'}});
    expect(app.state('name')).toBe('Petri');
});
    
test('email input sets state', () => {
    const app = mount(<App />);
    app.find('input [name="email"]').simulate('change', {target:{name:'email', value:'Petri@some.com'}});
    expect(app.state('email')).toBe('Petri@some.com');
});
    
});