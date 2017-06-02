import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Form from './Form.js';

describe('Form tests suite', () =>{
    
test('Form renders without crashing shallow', () => {
    shallow(<Form />);
});

test('Form has input elements', () => {
   expect (shallow(<Form />).find("input").length).toBe(2); 
});
    
});