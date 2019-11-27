import React, { Component } from 'react'
import Axios from 'axios'
import { Table, Input, Button } from 'reactstrap';

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
        })
        .catch((err) => {
            console.log(err)
        })
    }

    renderUserData = () => {
        return this.state.data.map((val, index) => {
            return(
                <tr key={val.id}>
                  <th scope="row">{index+1}</th>
                  <td>{val.first_name}</td>
                  <td>{val.last_name}</td>
                  <td>{val.email}</td>
                  <td><Button color='danger' onClick={() => this.deleteData(val.id)}>Delete</Button></td>
                </tr>
            )
        })
    }

    deleteData = (id) => {
        Axios.delete(`http://localhost:2000/users/${id}`)
        .then((res) => {
            // console.log(res.data)
            // this.setState({data: res.data})
            Axios.get('http://localhost:2000/users')
            .then((res) => {
                console.log(res.data)
                this.setState({data: res.data})
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    submitData = () => {
        var namaDepan = this.namaDepan.value;
        var namaBelakang = this.namaBelakang.value;
        var email = this.email.value;
        console.log(namaDepan)
        console.log(namaBelakang)
        console.log(email)
        Axios.post('http://localhost:2000/users', {
            first_name: namaDepan,
            last_name: namaBelakang,
            email: email
        })
        .then((res) => {
            // console.log(res.data)
            // this.setState({data: res.data})
            Axios.get('http://localhost:2000/users')
            .then((res) => {
                this.setState({data: res.data})
                this.namaDepan.value = '';
                this.namaBelakang.value = '';
                this.email.value = '';
            })
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
                    <tfoot>
                        <tr>
                            <td>
                                #
                            </td>
                            <td>
                                <Input type="text" innerRef={(namaDepan) => this.namaDepan = namaDepan}/>
                            </td>
                            <td>
                                <Input type="text" innerRef={(namaBelakang) => this.namaBelakang = namaBelakang}/>
                            </td>
                            <td>
                                <Input type="text" innerRef={(email) => this.email = email}/>
                            </td>
                            <td>
                                <Button color='primary' onClick={this.submitData}>
                                    Submit
                                </Button>
                            </td>
                        </tr>
                    </tfoot>
                </Table>
                
            </div>
        )
    }
}

export default Home