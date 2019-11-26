import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { Table, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Home extends Component{

    state = {
        data : [],
        buah: []
    }

    componentDidMount(){
        Axios.get('http://localhost:2000/users')
        .then((res) => {
            this.setState({data : res.data})
            console.log(this.state.data)
            Axios.get('http://localhost:2000/products')
            .then((res) => {
                console.log(res.data)
                this.setState({buah : res.data})
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    renderUserData = () => {
        return this.state.data.map((val, index) => {
            return(
                    <tr>
                      <th scope="row">{index+1}</th>
                      <td>{val.first_name}</td>
                      <td>{val.last_name}</td>
                      <td>{val.email}</td>
                    </tr>
            )
        })
    }

    submitData = () => {
        var namaDepan = this.refs.namaDepan.value
        var namaBelakang = this.refs.namaBelakang.value
        var email = this.refs.email.value
        console.log(namaDepan)
        console.log(namaBelakang)
        console.log(email)
        Axios.post('http://localhost:2000/users', {
            first_name: namaDepan,
            last_name: namaBelakang,
            email: email
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderUserData()}
                    </tbody>
                </Table>
                <Form>
                  <input type="text" className='form-control' ref='namaDepan'/>
                  <input type="text" className='form-control' ref='namaBelakang'/>
                  <input type="text" className='form-control' ref='email'/>
                  <Button color='primary' onClick={this.submitData}>
                      Submit
                  </Button>
                </Form>
            </div>
        )
    }
}

export default Home