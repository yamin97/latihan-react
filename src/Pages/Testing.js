import React, { Component } from 'react';
import TestingChild from './TestingChild'

class Testing extends Component {
    state = {  }
    
    onBtnClick = () => {
        this.props.history.push('/register')
    }

    render() { 
        return ( 
            <div>
                <input type='button' value='Go to Register' onClick={this.onBtnClick}/>
                <TestingChild history={this.props.history}/>
            </div>
        );
    }
}
 
export default Testing;