import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import {Row, Col} from 'react-bootstrap'

function PhaseTwoComplete(props){
    
    function winningSubmission (){
        return props.filteredSubmissions.find(submission => submission.selected === true)
    }


    console.log(props.winningSubmission)
    return(
        <div className="winning-audio">
            <Row>
                <Col xs={6} md={4}>
                    <h2 className="winner-text">{`Phase ${props.phase} Complete`}</h2>
                </Col>
                <Col xs={12} md={4}>
                    {props.phase === "two" ? <p>{props.winningSubmission.bpm} bpm, {props.winningSubmission.key_sig}</p> : <p>Final Song</p>}
                    <ReactAudioPlayer
                    src={`http://localhost:3000/${props.winningSubmission.audio_data.url}`}
                    controls
                    />
                </Col>
            </Row>
        </div>
    )
}

export default PhaseTwoComplete