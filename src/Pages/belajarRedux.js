import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout, contoh } from '../redux/action'
import { Button } from 'reactstrap'

class Belajar extends Component {
    state = { 

     }
    render() { 
        console.log(this.props.username)
        return ( 
            <div>
                <h1>
                    {
                        this.props.username
                        ?
                        this.props.username
                        :
                        'belum login'
                    }
                </h1>
                <Button onClick={this.props.logout}> 
                    Click me
                </Button>
                <Button onClick={this.props.contoh} color='primary'> 
                    Click me
                </Button>
            </div>
         );
    }
}

const MapStatetoProps = (state) => {
    return{
        username: state.user.username
    }
}
 
export default connect(MapStatetoProps, { logout, contoh })(Belajar);