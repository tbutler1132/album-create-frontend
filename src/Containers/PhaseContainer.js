import React from 'react'
import PhaseOne from '../Components/Phases/PhaseOne'
import { connect } from 'react-redux'
import { getImages } from '../Redux/action'
import { Switch, Route, NavLink } from 'react-router-dom'
import SubmitForm from '../Components/SubmitForm'


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

                    <PhaseOne songObj={this.props.songObj} filterSubmissions={this.filterSubmissions} user={this.props.user}/>


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