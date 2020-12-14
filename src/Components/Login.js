import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'



class Login extends Component{
    state = {
        name: "",
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
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.changeHandler}/>
                        <input type='password' name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                        <input type='submit' name="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default Login