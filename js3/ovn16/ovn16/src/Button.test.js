import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Button from './Button.js';

describe('Button tests suite', () =>{
    
test('Button renders without crashing shallow', () => {
    shallow(<Button />);
});

test('Button has button element', () => {
   expect (shallow(<Button />).find("button").length).toBe(1); 
});
    
test('Button has buttonClass', () => {
    expect (shallow(<Button />).find("button").hasClass("buttonClass")).toBe(true);
});
    
   
});