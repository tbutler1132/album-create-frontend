import React from 'react' 
import { Switch, Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import Thread from '../../../Components/Thread'
import { getBeats, getImages} from '../../../Redux/action'
import {filterSubmissions} from '../../../Helpers'
import PhaseOneInProgress from './PhaseOne/PhaseOneInProgress'
import PhaseOneComplete from './PhaseOne/PhaseOneComplete'



class PhaseTwo extends React.Component {

    
    componentDidMount = () => {
        this.props.fetchBeats()
        this.props.fetchImages()
    }

    filteredBeats = () => {
        return filterSubmissions(this.props.beats, this.props.songObj)
    }

    renderCommentThread = () => {
        return this.props.commentThread.map(thread => <Thread key={thread.id} threadObj={thread} songObj={this.props.songObj} user={this.props.user}/>)
    }

    winningImage = () => {
        return filterSubmissions(this.props.images, this.props.songObj).find(submission => submission.selected === true)
    }

    render(){
        console.log(this.props.images)
        return(
            <>
            {this.props.beats.length === 0 ? <p>Loading</p> :
            <>
            
                <>
     
                <PhaseOneComplete winningSubmission={this.winningImage()} filteredSubmissions={this.filteredBeats()}/>
                <PhaseOneInProgress type="Beat" voteClickHandler={this.props.voteClickHandler} filteredSubmissions={this.filteredBeats()} commentThread={this.renderCommentThread()} songObj={this.props.songObj} user={this.props.user}/>
                
                
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
        images: state.images
    }
}

const mdp = (dispatch) => {
    return { 
        fetchBeats: () => dispatch(getBeats()),
        fetchImages: () => dispatch(getImages()),
        voteClickHandler: (resultObj) => dispatch({type: "add_beat_result", payload: resultObj})
    }
}

export default connect(msp, mdp)(PhaseTwo)