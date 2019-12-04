import React, { Component } from 'react';
import { Input, Button } from 'reactstrap'
import Axios from 'axios';
import { connect } from 'react-redux'
import { login } from '../redux/action'
import { Redirect } from 'react-router-dom'

class Register extends Component {
    state = { 
        char: false,
        spec: false,
        num: false,
        show: false,
        border: false
     }

    registerUser = () => {
        let { char, spec, num } = this.state
        let username = this.text.value;
        let password = this.pass.value;
        let confirmPass = this.confirmPass.value;
        if(password !== confirmPass){
            alert('Invalid Password')
        }else{
            Axios.get(`http://localhost:2000/Login?username=${username}`)
            .then((res) => {
                if(res.data.length !==0){
                    alert('username has been taken')
                }else{
                    if(char && spec && num){
                        Axios.post('http://localhost:2000/Login', {
                            username,
                            password,
                            role: 'user'
                        })
                        .then((res) => {
                            this.props.login(res.data)
                        })
                    }else{
                        alert('Please Fill the Password Requirements')
                    }
                }
            })
        }
    }

    handleChange = (e) => {
        let pass = e.target.value
        let num = /[0-9]/
        let spec = /[!@#$%^&*;]/
        this.setState({
            num: num.test(pass), 
            spec: spec.test(pass), 
            char: pass.length > 7,
            border: (num.test(pass) && spec.test(pass) && (pass.length > 7))
        })

    }
    showReq = () => {
        this.setState({show: true})
    }

    render() {
        let { char, spec, num, show, border } = this.state
        if(this.props.username !== ''){
            return(
                <Redirect to='/'>

                </Redirect>
            )
        } 
        return ( 
            <div className='d-flex justify-content-center'>
                <div>
                    Username
                    <Input type='text' innerRef={(text) => this.text = text}/>
                    Password
                    <Input type='password' innerRef={(pass) => this.pass = pass} onChange={this.handleChange} onFocus={this.showReq} style={{borderColor: border ? 'green' : 'red'}}/>
                    Confirm Password
                    <Input type='password' innerRef={(confirmPass) => this.confirmPass = confirmPass}/>
                    <Button  onClick={this.registerUser}>
                        Click Me !
                    </Button>
                    {
                        show
                        ?
                        <div>
                        {
                            char
                            ?
                            <div style={{color: 'green'}}>
                                Password length must be 8 or more Characters
                            </div>
                            :
                            <div style={{color: 'red'}}>
                                Password length must be 8 or more Characters
                            </div>
                        }
                        {
                            spec
                            ?
                            <div style={{color: 'green'}}>
                                Password must include special characters
                            </div>
                            :
                            <div style={{color: 'red'}}>
                                Password must include special characters
                            </div>
                        }
                        {
                            num
                            ?
                            <div style={{color: 'green'}}>
                                Password must include number
                            </div>
                            :
                            <div style={{color: 'red'}}>
                                Password must include number
                            </div>
                        }
                        </div>
                        :
                        null
                    }
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        username: state.user.username
    }
}
 
export default connect(mapStateToProps, { login })(Register);