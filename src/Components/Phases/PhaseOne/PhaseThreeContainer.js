import React from 'react' 
import { Switch, Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import Thread from '../../../Components/Thread'
import { getBeats, getImages, getVocals} from '../../../Redux/action'
import {filterSubmissions} from '../../../Helpers'
import PhaseInProgress from './PhaseOne/PhaseInProgress'
import PhaseComplete from './PhaseOne/PhaseComplete'
import PhaseTwoComplete from './PhaseOne/PhaseTwoComplete'



class PhaseThree extends React.Component {

    
    componentDidMount = () => {
        this.props.fetchBeats()
        this.props.fetchImages()
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

    render(){
        console.log(this.props.beats)
        return(
            <>
            {this.props.beats.length === 0 ? <p>Loading</p> :
            <>
            
                <>
                <PhaseComplete phase="one" songObj={this.props.songObj} winningSubmission={this.winningImage()} filteredSubmissions={this.filteredVocals()}/>
                <PhaseTwoComplete phase="two" songObj={this.props.songObj} winningSubmission={this.winningBeat()} filteredSubmissions={this.filteredVocals()}/>
                <PhaseInProgress type="Vocal" voteClickHandler={this.props.voteClickHandler} filteredSubmissions={this.filteredVocals()} commentThread={this.renderCommentThread()} songObj={this.props.songObj} user={this.props.user}/>
                
                
                <NavLink to={`/tracks/${this.props.songObj.id}/${this.props.songObj.phase}/thread`}>
                    View Discussion
                </NavLink>
                
                </>

            </>
            }
            </>
        )
    }
}

const msp = (state) => {
    return {
        beats: state.beats,
        images: state.images,
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