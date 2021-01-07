import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import {Row, Col} from 'react-bootstrap'

function PhaseTwoComplete(props){
    
    function winningSubmission (){
        return props.filteredSubmissions.find(submission => submission.selected === true)
    }

    console.log(props)
    return(
        <div className="winning-audio">
            <Row>
                <Col>
                    <p>{`Phase ${props.phase} Complete`}</p>
                </Col>
                <Col>
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