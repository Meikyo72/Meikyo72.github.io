import React, { Component } from 'react';

class Button extends Component {
    render (){
        return(
            <button className="buttonClass" onClick={this.props.handleClick}>Delete state</button>
        )
    } 
};

export default Button;