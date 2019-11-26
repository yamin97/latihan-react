import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import Axios from 'axios'

class Home extends Component{

    componentDidMount(){
        Axios.get('http://localhost:2000/employees')
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.lof(err)
        })
    }
    contoh = () => {
        Axios.post('http://localhost:2000/users', {username: 'haha', password: '123'})
        .then((res) => {
            Axios.get('http://localhost:2000/users')
            .then((res) => {
                console.log(res.data)
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                Iniasdsadasdsad Home
                <Link to='/not-home' className='btn btn-outline-danger' >
                    not home
                </Link>
                <button onClick={this.contoh}>
                    click me
                </button>
            </div>
        )
    }
}

export default Home