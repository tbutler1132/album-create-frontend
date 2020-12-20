import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'

class PollTwo extends React.Component {

    
    state = {
        pollId: "",
        pollClicked: false
    }
    
    
    
    // selectPollChoices = () => {
    //         const shuffled = this.props.filterSubmissions(this.props.images, this.props.songObj).sort(() => 0.5 - Math.random());
    //         let choices = shuffled.slice(0, 2);
    //         return choices.map(choice => choice)
    // }

    selectBeatPollChoices = () => {
        return this.props.selectPollChoices(this.props.beats, this.props.songObj)
    }

    componentDidMount = () => {
        const newPoll = {
            phase: 2,
            user_id: this.props.user.id
        }
        const options = {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "accept": "application/json"
            },
            body: JSON.stringify({ poll: newPoll })
          }
            fetch("http://localhost:3000/polls", options)
            .then(response => response.json())
            .then(data => {
                this.setState({pollId: data.id})})
    }

    voteClickHandler = (e) => {
        let optionId = (e.target.name === "1") ? parseInt(e.target.previousSibling.id) : parseInt(e.target.previousSibling.id)
        const newResult = {
            win: true,
            winnable_id: optionId,
            winnable_type: "Beat",
            poll_id: this.state.pollId, // POST Poll in track
        }
        const options = {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "accept": "application/json"
            },
            body: JSON.stringify({ result: newResult })
          }
        fetch("http://localhost:3000/results", options)
        .then(r => r.json())
        .then(resultObj => {
            console.log(resultObj)
            this.props.voteClickHandler(resultObj)
            this.props.history.push(`/tracks/${this.props.songObj.id}/phasetwo`)
        })
        this.clickHandler()

    }

    // imageVoteClickHandler = () => {
    //     const options = this.props.voteClickHandler("RefImg", this.state.pollId)
    //     console.log(options)
    //     fetch("http://localhost:3000/results", options)
    //     .then(r => r.json())
    //     .then(resultObj => {
    //         console.log("Fetch", resultObj)
    //         this.props.voteClickHandler(resultObj)
    //         this.props.history.push(`/tracks/${this.props.songObj.id}`)
    //     })
    //     this.clickHandler()
    // }

    clickHandler = () => {
        if (this.state.pollClicked === false){
            this.setState({pollClicked: true})
        }
        else{
            this.setState({pollClicked: false})
        }
    }

    render(){
        const choices = this.selectBeatPollChoices()
        return(

            <div>
                <p id={choices[0].id}>{choices[0].bpm}</p>
                {choices[0] !== null ? <button name="1" onClick={this.voteClickHandler}>Vote</button> : null}
                <p id={choices[1].id}>{choices[1].bpm}</p>
                {choices[1] !== null ? <button name="2" onClick={this.voteClickHandler}>Vote</button> : null}
            </div>

        )
    }
}

const msp = (state) => {
    return {beats: state.beats}
}

const mdp = (dispatch) => {
    return {voteClickHandler: (resultObj) => dispatch({type: "add_beat_result", payload: resultObj})}
}

export default compose (
    connect(msp, mdp),
    withRouter)
    (PollTwo)