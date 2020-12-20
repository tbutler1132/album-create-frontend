import React from 'react'
import {connect} from 'react-redux'

class ProfileContainer extends React.Component{

    componentDidMount = () => {

    }

    render(){
        return(
            <p>ass</p>
        )
    }
}

const msp = (state) => {
    return {images: state.images, beats: state.beats}
}

const mdp = (dispatch) => {
    return { 
        
    }
}

export default connect(msp, mdp)(ProfileContainer)