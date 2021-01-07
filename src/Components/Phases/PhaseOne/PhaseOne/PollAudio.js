import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import {Button, Row, Col, Container} from 'react-bootstrap'

function PollAudio(props){
    return(
        <div>
            <Container>
                <Row className="poll-option">
                        <ReactAudioPlayer
                        id={props.choiceOne.id}
                        src={`http://localhost:3000/${props.choiceOne.audio_data.url}`}
                        controls
                        />
                    {props.choiceOne !== null ? <Button className="poll-button" variant="outline-danger" name="1" onClick={props.voteClickHandler}>Vote</Button> : null}
                </Row>

                <Row className="poll-option">
                    <ReactAudioPlayer
                        id={props.choiceTwo.id}
                        src={`http://localhost:3000/${props.choiceTwo.audio_data.url}`}
                        controls
                        />
                    {props.choiceTwo !== null ? <Button className="poll-button" variant="outline-danger" name="2" onClick={props.voteClickHandler}>Vote</Button> : null}
                                
                </Row>
            </Container>
        </div>
    )
}

export default PollAudio