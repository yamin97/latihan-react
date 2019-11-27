import React, { Component } from 'react'
import Axios from 'axios'
import { Table, Input, Button, ButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import Kartu from '../components/card'

class Home extends Component{

    state = {
        data : [],
        buah: [],
        selectedId: null,
        dropdownOpen : false
    }

    componentDidMount(){
        Axios.get('http://localhost:2000/users')
        .then((res) => {
            console.log(res.data)
            this.setState({data : res.data})
            // console.log(this.state.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    editData = (id) => {
        this.setState({selectedId: id})
        console.log(this.state.selectedId)
    }

    renderUserData = () => {
        return this.state.data.map((val, index) => {
            if(this.state.selectedId === val.id){
                return(
                    <tr key={val.id}>
                        <td></td>
                        <td>
                            <Input type="text" innerRef={(namaDepanEdit) => this.namaDepanEdit = namaDepanEdit}/>
                        </td>
                        <td>
                            <Input type="text" innerRef={(namaBelakangEdit) => this.namaBelakangEdit = namaBelakangEdit}/>
                        </td>
                        <td>
                            <Input type="text" innerRef={(emailEdit) => this.emailEdit = emailEdit}/>
                        </td>
                        <td><Button color='primary' onClick={() => this.confirmEdit(val.id)}>Confirm</Button></td>
                        <td><Button color='secondary' onClick={() => this.setState({selectedId: null})}>Cancel</Button></td>
                    </tr>
                )
            }
            return(
                <tr key={val.id}>
                  <th scope="row">{index+1}</th>
                  <td>{val.first_name}</td>
                  <td>{val.last_name}</td>
                  <td>{val.email}</td>
                  <td><Button color='success' onClick={() => this.editData(val.id)}>Edit</Button></td>
                  <td><Button color='danger' onClick={() => this.deleteData(val.id)}>Delete</Button></td>
                </tr>
            )
        })
    }

    confirmEdit = (id) => {
        var namaDepan = this.namaDepanEdit.value;
        var namaBelakang = this.namaBelakangEdit.value;
        var email = this.emailEdit.value;
        Axios.put(`http://localhost:2000/users/${id}`,{
            first_name: namaDepan,
            last_name:namaBelakang,
            email:email,
        })
        .then(() => {
            Axios.get('http://localhost:2000/users')
            .then((res) => {
                console.log(res.data)
                this.setState({data: res.data, selectedId: null})
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    deleteData = (id) => {
        Axios.delete(`http://localhost:2000/users/${id}`)
        .then(() => {
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

    renderCard = () => {
        return this.state.data.map((val) => {
            return(
                <Kartu contoh={val.first_name} contoh2={val.last_name} contoh3={val.email}/>
            )
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
                
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({dropdownOpen: !this.state.dropdownOpen})}>
                  <DropdownToggle caret>
                    Button Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
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
                {this.renderCard()}
            </div>
        )
    }
}

export default Home