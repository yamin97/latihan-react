import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class TestingChild extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
               <input type='button' value='Go to Login' onClick={() => this.props.history.push('/login')}/> 
            </div>
         );
    }
}
 
export default TestingChild;