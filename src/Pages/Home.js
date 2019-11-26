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
                  <FormGroup>
                    <Label for="first-name">First Name</Label>
                    <Input type="text" name="first-name" ref="first-name" placeholder="First Name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="last-name">Last Name</Label>
                    <Input type="text" name="last-name" ref="last-name" placeholder="Last Name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="text" name="email" ref="email" placeholder="Email" />
                  </FormGroup>
                  <Button color='primary' onClick={this.submitData}>
                      Submit
                  </Button>
                </Form>
            </div>
        )
    }
}

export default Home