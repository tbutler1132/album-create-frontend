import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {Button, Form} from 'react-bootstrap'



class Login extends Component{
    state = {
        username: "",
        password: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)

    }
    
    render(){

        return (

            <div className="login-form">
                <Form onSubmit={this.submitHandler}>
                    <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler}/>
                    </Form.Group>

                    <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                    </Form.Group>
                            <Button variant="light" type='submit' name="submit" value="Login">
                                Login
                            </Button>
                </Form>
            </div>
        )
    }
}

export default Login