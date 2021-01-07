import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'
import {selectPollChoices} from '../../../../Helpers'
import PollImages from './PollImages'
import PollAudio from './PollAudio'


class Poll extends React.Component {

    
    state = {
        pollId: "",
        pollClicked: false
    }
    
    selectPollChoices = () => {
        return selectPollChoices(this.props.filteredSubmissions)
    }

    componentDidMount = () => {
        const newPoll = {
            phase: 1,
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
            winnable_type: this.props.type,
            poll_id: this.state.pollId, // POST Poll in track
        }
        console.log(newResult)
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
            this.props.history.push(`/tracks/${this.props.songObj.id}/${this.props.songObj.phase}`)
        })
        this.clickHandler()

    }

    clickHandler = () => {
        if (this.state.pollClicked === false){
            this.setState({pollClicked: true})
        }
        else{
            this.setState({pollClicked: false})
        }
    }

    render(){
        console.log(this.selectPollChoices())
        const choices = this.selectPollChoices()
        return(
            <div className="poll-images">
{            this.props.songObj.phase === 1 ?
            <PollImages choiceOne={choices[0]} choiceTwo={choices[1]} voteClickHandler={this.voteClickHandler}/>
            :
            <PollAudio choiceOne={choices[0]} choiceTwo={choices[1]} voteClickHandler={this.voteClickHandler}/>}
            </div>
        )
    }
}

const msp = (state) => {
    return {images: state.images}
}

export default compose (
    connect(msp),
    withRouter)
    (Poll)