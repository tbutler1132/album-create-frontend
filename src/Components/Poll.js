import React from 'react'
import {connect} from 'react-redux'

class Poll extends React.Component {

    
    state = {
        pollId: ""
    }
    
    
    
    selectPollChoices = () => {
        console.log(this.props.images)
            const shuffled = this.props.filterSubmissions(this.props.images, this.props.songObj).sort(() => 0.5 - Math.random());
            let choices = shuffled.slice(0, 2);
            return choices.map(choice => choice)
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
        let optionId = (e.target.name === "1") ? parseInt(e.target.previousSibling.id) : parseInt(e.target.previousSibling.id)
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
        this.props.pollClickHandler()

    }

    render(){
        const choices = this.selectPollChoices()
        return(
            <div>
                <img src={choices[0].img_url} id={choices[0].id} alt="Ye" width="300" height="300" />
                {choices[0] !== null ? <button name="1" onClick={this.voteClickHandler}>Vote</button> : null}
                <img src={choices[1].img_url} id={choices[1].id} alt="Ye" width="300" height="300" />
                {choices[1] !== null ? <button name="2" onClick={this.voteClickHandler}>Vote</button> : null}
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