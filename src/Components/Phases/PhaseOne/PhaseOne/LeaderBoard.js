import React from 'react'
import {connect} from 'react-redux'
import {Col, Container, Row} from 'react-bootstrap'
import {NavLink} from 'react-browser-router'

class LeaderBoard extends React.Component{

// createLeaderboard = () => {
//     if(this.props.submissions.length > 0){
//         const wins = this.props.filterSubmissions.map(image => image.results.length)
//         const imagesWithWins = []
//         this.props.filterSubmissions.forEach(function(v,i){
//             const obj = {};
//             obj.image = v;
//             obj.wins = wins[i];
//             imagesWithWins.push(obj);
//         });
//         const i = imagesWithWins.sort(function (l, r) {
//             return r.wins - l.wins;
//         });
//         return [i[0], i[1], i[2], i[3], i[4]]
//     }
// }

createImagesLeaderBoard= () => {
    return this.props.createLeaderBoard(this.props.submissions, this.props.songObj)
}

renderLeaderBoard = () => {
    return this.createImagesLeaderBoard().map(element =>
    <div className="leaderboard-element" key={element.submission.id}>
        <Col>
        <img src={element.submission.img_url} alt="Ye" width="150" height="150" />
        {/* <p>{element.submission.title}</p>
        <p>Votes: {element.wins}</p> */}
        </Col> 
    </div> 
    
    )
}

winningSubmission = () => {
    return this.props.filterSubmissions.find(image => image.selected === true)
}

    render(){

        return(
            <>
            {/* <h3>"Vision is a conduit of the fleeting memory"</h3> */}
            <h3>Phase One: Select the visual stimulations that will guide our sonic journey</h3>
            <h5>The current leaders of our visual crusade</h5>
            <Container>
            {this.props.songObj.ref_imgs.length === 0 ? <p>Need Images</p> : 
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
            <NavLink to={`/tracks/${this.props.songObj.id}/phaseone/submitform`}>Submit an Image</NavLink>
            <br></br>
            {this.props.songObj.ref_imgs.length > 0 ?
            <NavLink to={`/tracks/${this.props.songObj.id}/phaseone/poll`}>Create a poll</NavLink>
            :
            null
            }
            <NavLink to={`/tracks/${this.props.songObj.id}/phaseone/images`}>
            <h3>See all Images</h3>
            </NavLink>
            </>
        )
    }
}


// const msp = (state) => {
//     return {images: state.images}
// }

export default LeaderBoard