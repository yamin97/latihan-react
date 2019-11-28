import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { add, minus } from '../redux/action'
import {Button} from 'reactstrap'

class NotHome extends Component{
    render(){
        console.log(this.props.count)
        return(
            <div>
                Ini bukan home
                <Link to='/' className='btn btn-outline-secondary'>
                   home
                </Link>
                <Button onClick={this.props.minus}>
                    -
                </Button>
                {this.props.count}
                <Button onClick={this.props.add}>
                    +
                </Button>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        count : state.count.count
    }
}

export default connect(mapStatetoProps, { add, minus })(NotHome)