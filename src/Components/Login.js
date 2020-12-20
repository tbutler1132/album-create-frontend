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
                <form onSubmit={this.submitHandler}>
                        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler}/>
                        <input type='password' name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                        <Button>
                        <input type='submit' name="submit" value="Login"/>
                        </Button>
                </form>
            </div>
        )
    }
}

export default Login