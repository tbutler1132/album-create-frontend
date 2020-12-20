import React from 'react'
// import {connect} from 'react-redux'
import {Col, Container, Row} from 'react-bootstrap'
import {NavLink} from 'react-browser-router'

class LeaderBoardThree extends React.Component{

createVocalsLeaderBoard= () => {
    return this.props.createLeaderBoard(this.props.submissions, this.props.songObj)
}

renderLeaderBoard = () => {
    return this.createVocalsLeaderBoard().map(element =>
    <div className="leaderboard-element" key={element.submission.id}>
        <Col>
        <p>{element.submission.id}</p>
        <p>Votes: {element.wins}</p>
        </Col> 
    </div> 
    
    )
}

winningSubmission = () => {
    return this.props.filterSubmissions.find(vocal => vocal.selected === true)
}

    render(){
        console.log(this.props.createLeaderBoard)
        return(
            <>
            <p className="song-description">{this.props.songObj.description}</p>
            <h3>"The human voice is the connection of the soul"</h3>
            <h4>Phase Three: Select the soul that will rapture our song</h4>
            <h5>The current leaders of the voices that will carry our souls</h5>
            <Container>
            {this.props.songObj.vocals.length === 0 ? <p>Need Images</p> : 
                <div>
                    <Row >
                        <Col className="leaderboard-number">1</Col>
                        <Col className="leaderboard-number">2</Col>
                        <Col className="leaderboard-number">3</Col>
                        <Col className="leaderboard-number">4</Col>
                        <Col className="leaderboard-number">5</Col>
                    </Row>
                    <Row>
                        {this.renderLeaderBoard()}
                    </Row>
                </div>
            }
            </Container>
            <NavLink to={`/tracks/${this.props.songObj.id}/submitform`}>Submit an Image</NavLink>
            <br></br>
            {this.props.songObj.vocals.length > 0 ?
            <NavLink to={`/tracks/${this.props.songObj.id}/phasethree/poll`}>Create a poll</NavLink>
            :
            null
            }
            <h3>See all Vocals</h3>
            <h4><br></br>Select the auditory stimulations that will guide our sonic journey</h4>
            </>
        )
    }
}


// const msp = (state) => {
//     return {images: state.images}
// }

export default LeaderBoardThree