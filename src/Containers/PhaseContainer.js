import React from 'react'
import PhaseOne from '../Components/Phases/PhaseOne'
import { connect } from 'react-redux'
import { getImages } from '../Redux/action'


class PhaseContainer extends React.Component {

    componentDidMount = () => {
        this.props.fetchImages()
    }

    render(){
        return(
            <PhaseOne songObj={this.props.songObj}/>
        )
        
    }

    
}
    const msp = (state) => {
        return {images: state.images}
    }
    
    const mdp = (dispatch) => {
        return {fetchImages: () => dispatch(getImages())}
    }
    
export default connect(msp, mdp)(PhaseContainer)