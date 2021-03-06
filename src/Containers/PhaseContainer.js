import React from 'react'
import PhaseOneContainer from '../Components/Phases/PhaseOne/PhaseOneContainer.js'
import { connect } from 'react-redux'
import { getImages, getBeats, getVocals, getThreads } from '../Redux/action'
import PhaseTwoContainer from '../Components/Phases/PhaseOne/PhaseTwoContainer.js'
import PhaseThreeContainer from '../Components/Phases/PhaseOne/PhaseThreeContainer'
import PhaseFourContainer from '../Components/Phases/PhaseOne/PhaseFourContainer'





class PhaseContainer extends React.Component {

    componentDidMount = () => {

        this.props.fetchVocals()
        this.props.fetchThreads()
        this.props.fetchBeats()
    } 

    filterCommentThreads = () => {
        return this.props.threads.filter(thread => thread.song.id === this.props.songObj.id)
    }

    phaseOneThread = () => {
        return this.filterCommentThreads().filter(thread => thread.phase === 1)
    }

    phaseTwoThread = () => {
        return this.filterCommentThreads().filter(thread => thread.phase === 2)
    }

    phaseThreeThread = () => {
        return this.filterCommentThreads().filter(thread => thread.phase === 3)
    }

    phaseFourThread = () => {
        return this.filterCommentThreads().filter(thread => thread.phase === 4)
    }

    render(){
        return(
                <>
                {this.props.songObj.phase === 1 ?                
                
                <PhaseOneContainer className="phase-in-progress" commentThread={this.phaseOneThread()} voteClickHandler={this.voteClickHandler}  songObj={this.props.songObj}  user={this.props.user}/>

                :

                null}

                        {this.props.songObj.phase === 2 ?  
                    
                <PhaseTwoContainer commentThread={this.phaseTwoThread()} voteClickHandler={this.voteClickHandler} selectPollChoices={this.selectPollChoices} createLeaderBoard={this.createLeaderBoard} songObj={this.props.songObj} filterSubmissions={this.filterSubmissions} user={this.props.user}/>
                
                        :

                        null}

                {this.props.songObj.phase === 3 ?

                <PhaseThreeContainer commentThread={this.phaseThreeThread()} voteClickHandler={this.voteClickHandler} selectPollChoices={this.selectPollChoices} createLeaderBoard={this.createLeaderBoard} songObj={this.props.songObj} filterSubmissions={this.filterSubmissions} user={this.props.user}/>
                :

                null}

                {this.props.songObj.phase === 4 ?
                
                <PhaseFourContainer commentThread={this.phaseFourThread()} voteClickHandler={this.voteClickHandler} selectPollChoices={this.selectPollChoices} createLeaderBoard={this.createLeaderBoard} songObj={this.props.songObj} filterSubmissions={this.filterSubmissions} user={this.props.user}/>
                :
                
                null}

 
                </>

        )
        
    }

    
}
    const msp = (state) => {
        return {images: state.images, beats: state.beats, threads: state.threads}
    }
    
    const mdp = (dispatch) => {
        return { 
            fetchBeats: () => dispatch(getBeats()),
            fetchVocals: () => dispatch(getVocals()),
            fetchThreads: () => dispatch(getThreads())    
        }
    }
    
export default connect(msp, mdp)(PhaseContainer)