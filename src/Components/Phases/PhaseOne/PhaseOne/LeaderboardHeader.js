import React from 'react'
import {Row, Col} from 'react-bootstrap'

function LeaderboardHeader(){
    return(
        <>
            <h5>Current Visual Reference Leaders</h5>
            <Row >
                <Col className="leaderboard-number">1</Col>
                <Col className="leaderboard-number">2</Col>
                <Col className="leaderboard-number">3</Col>
                <Col className="leaderboard-number">4</Col>
                <Col className="leaderboard-number">5</Col>
            </Row>
        </>
    )
}

export default LeaderboardHeader