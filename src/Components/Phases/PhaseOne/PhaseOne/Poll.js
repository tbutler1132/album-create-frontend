import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'
import {selectPollChoices} from '../../../../Helpers'
import PollImages from './PollImages'
import PollBeats from '../PhaseTwo/PollBeats'


class Poll extends React.Component {

    
    state = {
        pollId: "",
        pollClicked: false
    }
    
    selectPollChoices = () => {
        return selectPollChoices(this.props.images, this.props.songObj, this.props.filteredSubmissions)
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
        const choices = this.selectPollChoices()
        console.log(this.props.songObj.phase)
        return(
            <>
{            this.props.songObj.phase === 1 ?
            <PollImages choiceOne={choices[0]} choiceTwo={choices[1]} voteClickHandler={this.voteClickHandler}/>
            :
            <PollBeats choiceOne={choices[0]} choiceTwo={choices[1]} voteClickHandler={this.voteClickHandler}/>}
            </>
        )
    }
}

const msp = (state) => {
    return {images: state.images}
}

// const mdp = (dispatch) => {
//     return {voteClickHandler: (resultObj) => dispatch({type: "add_result", payload: resultObj})}
// }

export default compose (
    connect(msp),
    withRouter)
    (Poll)