import React from 'react' 
import { Switch, Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import Thread from '../../../Components/Thread'
import { getBeats, getImages, getVocals} from '../../../Redux/action'
import {filterSubmissions} from '../../../Helpers'
import PhaseInProgress from './PhaseOne/PhaseInProgress'
import PhaseComplete from './PhaseOne/PhaseComplete'
import PhaseTwoComplete from './PhaseOne/PhaseTwoComplete'
import {Container, Row} from 'react-bootstrap'



class PhaseThree extends React.Component {

    
    componentDidMount = () => {
        this.props.fetchImages()
        this.props.fetchBeats()
        this.props.fetchVocals()
    }

    filteredVocals = () => {
        return filterSubmissions(this.props.vocals, this.props.songObj)
    }

    renderCommentThread = () => {
        return this.props.commentThread.map(thread => <Thread key={thread.id} threadObj={thread} songObj={this.props.songObj} user={this.props.user}/>)
    }

    winningBeat = () => {
        return filterSubmissions(this.props.beats, this.props.songObj).find(submission => submission.selected === true)
    }

    winningImage = () => {
        return filterSubmissions(this.props.images, this.props.songObj).find(submission => submission.selected === true)
    }

    winningVocal = () => {
        return filterSubmissions(this.props.vocals, this.props.songObj).find(submission => submission.selected === true)
    }

    render(){
        console.log(this.props.vocals)
        return(
            <>
            {this.props.vocals.length === 0 ? <p>Loading</p> :
            <>
            
                <>
              
                 
                        <PhaseComplete songObj={this.props.songObj} winningSubmission={this.winningImage()} filteredSubmissions={this.filteredVocals()}/>
             
                        <PhaseTwoComplete phase="two" songObj={this.props.songObj} winningSubmission={this.winningBeat()} filteredSubmissions={this.filteredVocals()}/>

                        <PhaseTwoComplete phase="three" songObj={this.props.songObj} winningSubmission={this.winningVocal()} filteredSubmissions={this.filteredVocals()}/>
                 
          
                
                </>

            </>
            }
            </>
        )
    }
}

const msp = (state) => {
    return {
        images: state.images,
        beats: state.beats,
        vocals: state.vocals
    }
}

const mdp = (dispatch) => {
    return { 
        fetchBeats: () => dispatch(getBeats()),
        fetchImages: () => dispatch(getImages()),
        fetchVocals: () => dispatch(getVocals()),
        voteClickHandler: (resultObj) => dispatch({type: "add_vocal_result", payload: resultObj})
    }
}

export default connect(msp, mdp)(PhaseThree)