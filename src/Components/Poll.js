import React from 'react'
import {connect} from 'react-redux'

class Poll extends React.Component {

    
    state = {
        pollId: ""
    }
    
    
    
    selectPollChoices = () => {
            const shuffled = this.props.filterSubmissions(this.props.images, this.props.songObj).sort(() => 0.5 - Math.random());
            let choices = shuffled.slice(0, 2);
            return choices.map(choice => choice.id)
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
            .then(data => this.setState({pollId: data.id}))
    }

    voteClickHandler = (e) => {
        console.log(parseInt(e.target.previousSibling.textContent))
        let optionId = (e.target.name === "1") ? parseInt(e.target.previousSibling.textContent) : parseInt(e.target.previousSibling.textContent)
        const newResult = {
            win: true,
            winnable_id: optionId,
            winnable_type: "RefImg",
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
            this.props.voteClickHandler(resultObj)
            
        })

    }

    render(){
        return(
            <div>
                <p>{this.selectPollChoices()[0]}</p>
                {this.selectPollChoices()[0] !== null ? <button name="1" onClick={this.voteClickHandler}>Vote</button> : null}
                <p>{this.selectPollChoices()[1]}</p>
                {this.selectPollChoices()[1] !== null ? <button name="2" onClick={this.voteClickHandler}>Vote</button> : null}
            </div>
        )
    }
}

const msp = (state) => {
    return {images: state.images}
}

const mdp = (dispatch) => {
    return {voteClickHandler: (resultObj) => dispatch({type: "add_result", payload: resultObj})}
}

export default connect(msp, mdp)(Poll)