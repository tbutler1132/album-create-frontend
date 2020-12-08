import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import React from 'react'
import TracksContainer from './Containers/TracksContainer'

class App extends React.Component{

  render(){
    return(
      <TracksContainer />
    )
  }

}

export default App;
