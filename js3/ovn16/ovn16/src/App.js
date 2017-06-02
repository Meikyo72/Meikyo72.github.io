import React, { Component } from 'react';
import './App.css';
import Button from './Button.js';
import Form from './Form.js';

    class App extends React.Component {
      constructor () {
          super(...arguments);
          this.state = {
              name: '',
              email: ''
          };
          this.handleClick = this.handleClick.bind(this);
          this.handleChange = this.handleChange.bind(this);
      }
    handleClick(event) {
        this.setState({name: '', email: ''});
    }
    handleChange(event) {
        if (event.target.name === 'name')
            this.setState({name: event.target.value});
        else if (event.target.name === 'email')
            this.setState({email: event.target.value});
    }
      render() {
        return (
          <div>
            <Form handleChange={this.handleChange} name={this.state.name} email={this.state.email} />
            <Button handleClick={this.handleClick} />
          </div>
        );
      }
    }

    export default App;
