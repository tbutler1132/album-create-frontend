import React from 'react'
import PhaseOne from '../Components/Phases/PhaseOne'
import { connect } from 'react-redux'
import { getImages } from '../Redux/action'


class PhaseContainer extends React.Component {

    componentDidMount = () => {
        this.props.fetchImages()
    }

    // renderPhaseOne = () => {
    //     return <PhaseOne songObj={this.props.songObj} images={this.props.images} filterImages={filter}/>
    // }

    filterSubmissions (submissionType, songObj) {
        if(submissionType.length > 0){
            return submissionType.filter(element => element.song.id === songObj.id)
        }
        else{
            return []
        }
    }

    render(){

        return(
            <PhaseOne songObj={this.props.songObj} images={this.props.images} filterSubmissions={this.filterSubmissions}/>
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