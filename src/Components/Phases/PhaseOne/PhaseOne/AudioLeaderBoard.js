import React from 'react'
import {createLeaderBoard} from '../../../../Helpers'
import {Col, Row} from 'react-bootstrap'
import ReactAudioPlayer from 'react-audio-player';

function AudioLeaderBoard(props){

    console.log(props.filteredSubmissions[2])

    function renderAudioLeaderBoard (){
        return createLeaderBoard(props.filteredSubmissions).map(element =>

        <div  key={element.submission.id}>
                <ReactAudioPlayer
                src={`http://localhost:3000/${element.submission.audio_data.url}`}
                controls
                />
                <p>Votes: {element.wins}</p> 
        </div> 
        
        )
    }

    function renderVerticalRankings () {
        return (
            <>
            <p className="leaderboard-number">1</p>
            <p className="leaderboard-number">2</p>
            <p className="leaderboard-number">3</p>
            <p className="leaderboard-number">4</p>
            <p className="leaderboard-number">5</p>
            </>
        )
    }

    return(
        <>
        <Col>
            <h3>Current Leaders</h3>
            {renderAudioLeaderBoard()}
        </Col>
        </>
    )
}


export default AudioLeaderBoard