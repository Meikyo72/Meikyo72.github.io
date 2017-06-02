import React, { Component } from 'react';

class Inner extends Component {
    render(){
        throw new Error('an erroe occured');
        return(
        <p>Inner text</p>
        )
    }
}
export default Inner;