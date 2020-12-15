import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import React from 'react'
import TracksContainer from './Containers/TracksContainer'
import {Route, Switch} from 'react-router-dom'
import Welcome from './Components/Welcome'
import NavBar from './Components/NavBar'
import Signup from './Components/Signup'

class App extends React.Component{

  state = {
    user: false
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
    .then(newUser => this.setState({user: newUser}))
  }

  render(){
    return(
      <>

      <NavBar />

      <Switch>
        <Route path="/signup" render={() => <Signup submitHandler={this.signupHandler} />} />
        <Route path="/login" render ={() => <Login />} /> 
        <Route path="/testing" render={() => <Welcome />} />
        <Route path="/tracks" render={() => <TracksContainer user={this.state.user} />} />
      </Switch>
      </>
    )
  }

}

export default App;
