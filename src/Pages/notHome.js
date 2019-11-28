import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class NotHome extends Component{
    render(){
        console.log(this.props.count)
        return(
            <div>
                Ini bukan home
                <Link to='/' className='btn btn-outline-secondary'>
                   home
                </Link>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        count : state.count
    }
}

export default connect(mapStatetoProps)(NotHome)