import React, { Component } from 'react';

class Form extends Component {
    render () {
        return(
        <div>
            <input name="name" placeholder="Name" onChange={this.props.handleChange} value={this.props.name} />
            <input name="email" placeholder="Email" onChange={this.props.handleChange} value={this.props.email} />
                
        </div>
            );
    }
}

export default Form;