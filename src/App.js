//import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import React from 'react'
import TracksContainer from './Containers/TracksContainer'
import {Route, Switch, withRouter} from 'react-router-dom'
import Welcome from './Components/Welcome'
import NavBar from './Components/NavBar'
import Signup from './Components/Signup'
import SubmitForm from './Components/SubmitForm'

class App extends React.Component{

  state = {
    user: false
  }

  componentDidMount(){
    const token = localStorage.getItem("token")
    if (token) {
      fetch('http://localhost:3000/profile', {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`},
      })
      .then(response => response.json())
      .then(data => this.setState({user: data.user}))
    } else {
      this.props.history.push("/signup")
    }
  }
  

  signupHandler = (userObj) => {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({user: userObj})
    })
    .then(response => response.json())
    .then(data => this.setState({user: data.user}))
  }

  loginHandler = (userInfo) => {
    console.log(userInfo)
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({user: userInfo})
    })
    .then(response => response.json())
    .then(data => {
      
      localStorage.setItem("token", data.jwt)
      this.setState({user: data.user}, () => this.props.history.push("/tracks"))
      
    })
  }

  logoutHandler = () => {
    localStorage.removeItem("token")
    this.props.history.push("/login")
    this.setState({user: null})
  }

  render(){
    return(
      <>

      <NavBar user={this.state.user} logoutHandler={this.logoutHandler}/>

      <Switch>
        <Route path="/login" render={() => <Login submitHandler={this.loginHandler} />} /> 
        <Route path="/signup" render={() => <Signup submitHandler={this.signupHandler} />} />
        <Route path="/login" render ={() => <Login />} /> 
        <Route path="/testing" render={() => <Welcome />} />
        <Route path="/tracks" render={() => <TracksContainer user={this.state.user} />} />
      </Switch>
      </>
    )
  }

}

export default withRouter(App);
