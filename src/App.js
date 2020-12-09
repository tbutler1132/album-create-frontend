import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import React from 'react'
import TracksContainer from './Containers/TracksContainer'
import {Route} from 'react-router-dom'
import Welcome from './Components/Welcome'

class App extends React.Component{

  render(){
    return(
      <>
        <Route path="/login" render ={() => <Login />} /> 
        <Route path="/welcome" render={() => <Welcome />} />
        <Route path="/tracks" render={() => <TracksContainer />} />
      </>
    )
  }

}

export default App;
