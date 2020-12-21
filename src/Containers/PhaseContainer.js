import React from 'react'
import PhaseOneContainer from '../Components/Phases/PhaseOne/PhaseOneContainer.js'
import { connect } from 'react-redux'
import { getImages, getBeats, getVocals, getThreads } from '../Redux/action'
import { Switch, Route, NavLink } from 'react-router-dom'
import PhaseTwoContainer from '../Components/Phases/PhaseOne/PhaseTwoContainer.js'
import PhaseThreeContainer from '../Components/Phases/PhaseOne/PhaseThreeContainer'





class PhaseContainer extends React.Component {

    componentDidMount = () => {
        this.props.fetchImages()
        this.props.fetchBeats()
        this.props.fetchVocals()
        this.props.fetchThreads()
    }

    voteClickOptions = (newResult) => {
        return {
            method: "POST",
                headers: {
                "content-type": "application/json",
                "accept": "application/json"
                },
            body: JSON.stringify({ result: newResult })
        }
    }

    createLeaderBoard = (submissions, songObj) => {
        if(submissions.length > 0){
            const wins = this.filterSubmissions(submissions, songObj).map(element => element.results.length)
            const submissionsWithWins = []
            this.filterSubmissions(submissions, songObj).forEach(function(v,i){
                const obj = {};
                obj.submission = v;
                obj.wins = wins[i];
                submissionsWithWins.push(obj);
            });
            const i = submissionsWithWins.sort(function (l, r) {
                return r.wins - l.wins;
            });
            return [i[0], i[1], i[2], i[3], i[4]]
        }
    }

    selectPollChoices = (submissions, songObj, pollId) => {
        const shuffled = this.filterSubmissions(submissions, songObj).sort(() => 0.5 - Math.random());
        let choices = shuffled.slice(0, 2);
        return choices.map(choice => choice)
    }
    
    // voteClickHandler(pollOptionType, pollId){
    //     console.log(pollOptionType)
    //     const wrappedVoteClickHandler = (e) => {
    //         let optionId = (e.target.name === "1") ? parseInt(e.target.previousSibling.id) : parseInt(e.target.previousSibling.id)
    //         const newResult = {
    //             win: true,
    //             winnable_id: optionId,
    //             winnable_type: pollOptionType,
    //             poll_id: pollId, // POST Poll in track
    //         }
    //         return {
    //             method: "POST",
    //             headers: {
    //             "content-type": "application/json",
    //             "accept": "application/json"
    //             },
    //             body: JSON.stringify({ result: newResult })
    //         }

    //     }
    //     return wrappedVoteClickHandler()
    // }


    filterSubmissions (submissionType, songObj) {
        if(submissionType.length > 0 && submissionType[0].song){
            return submissionType.filter(element => element.song.id === songObj.id)
        }
        else if (submissionType.length > 0 && submissionType[0].beat){
            return submissionType.filter(element => element.beat.song.id === songObj.id)
        }
        else{
            return []
        }
    }

 

    filterCommentThreads = () => {
        return this.props.threads.filter(thread => thread.song.id === this.props.songObj.id)
    }

    phaseOneThread = () => {
        return this.filterCommentThreads().filter(thread => thread.phase === this.props.songObj.phase)
    }

    render(){
        return(
                <>
                <div className="track-header">
                    <h1>{this.props.songObj.title}</h1>
                    <p className="song-description">{this.props.songObj.description}</p>
                </div>
                <Switch>
                    <Route path={`/tracks/${this.props.songObj.id}/phaseone`} render={() => <PhaseOneContainer commentThread={this.phaseOneThread()} voteClickHandler={this.voteClickHandler} selectPollChoices={this.selectPollChoices} createLeaderBoard={this.createLeaderBoard} songObj={this.props.songObj} filterSubmissions={this.filterSubmissions} user={this.props.user}/>}/>
                    <Route path={`/tracks/${this.props.songObj.id}/phasetwo`} render={() => <PhaseTwoContainer voteClickHandler={this.voteClickHandler} selectPollChoices={this.selectPollChoices} createLeaderBoard={this.createLeaderBoard} songObj={this.props.songObj} filterSubmissions={this.filterSubmissions} user={this.props.user}/>}/>
                    <Route path={`/tracks/${this.props.songObj.id}/phasethree`} render={() => <PhaseThreeContainer voteClickHandler={this.voteClickHandler} selectPollChoices={this.selectPollChoices} createLeaderBoard={this.createLeaderBoard} songObj={this.props.songObj} filterSubmissions={this.filterSubmissions} user={this.props.user}/>}/>
                    {/* <Route path={`/tracks/${this.props.songObj.id}/phasefour`} render={() => <PhaseFourContainer voteClickHandler={this.voteClickHandler} selectPollChoices={this.selectPollChoices} createLeaderBoard={this.createLeaderBoard} songObj={this.props.songObj} filterSubmissions={this.filterSubmissions} user={this.props.user}/>}/> */}
                </Switch>
                </>

        )
        
    }

    
}
    const msp = (state) => {
        return {images: state.images, beats: state.beats, threads: state.threads}
    }
    
    const mdp = (dispatch) => {
        return { 
            fetchImages: () => dispatch(getImages()),
            fetchBeats: () => dispatch(getBeats()),
            fetchVocals: () => dispatch(getVocals()),
            fetchThreads: () => dispatch(getThreads())    
        }
    }
    
export default connect(msp, mdp)(PhaseContainer)