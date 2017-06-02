import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Inner from './Inner.js';

test('renders without crashing shallow', () => {
		shallow(<Inner/>);
});
    
test('renders without crashing deep', () => {
		shallow(<Inner/>).render();
});