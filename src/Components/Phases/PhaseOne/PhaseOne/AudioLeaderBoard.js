import React from 'react'
import {createLeaderBoard} from '../../../../Helpers'
import {Col, Row} from 'react-bootstrap'

function AudioLeaderBoard(props){

    function renderAudioLeaderBoard (){
        console.log(props.filteredSubmissions[0])
        return createLeaderBoard(props.filteredSubmissions).map(element =>
        <div className="leaderboard-element" key={element.submission.id}>
            <Col>
                <h5>{element.submission.id}</h5>
                <p>Votes: {element.wins}</p> 
            </Col> 
        </div> 
        
        )
    }

    return(
        <>
            {renderAudioLeaderBoard()}
        </>
    )
}


export default AudioLeaderBoard