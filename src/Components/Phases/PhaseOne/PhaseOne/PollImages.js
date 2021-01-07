import React from 'react'
import {Button, Row, Col, Container} from 'react-bootstrap'

function PollImages(props){
    return(
        <div >
            <Container>
                <Row className="poll-option">
        
                        <img className="poll-options" src={props.choiceOne.img_url} id={props.choiceOne.id} alt="Ye" width="300" height="300" />
            
                        {props.choiceOne !== null ? <Button className="poll-button" variant="outline-danger" name="1" onClick={props.voteClickHandler}>Vote</Button> : null}
        
                </Row>

                <Row className="poll-option">
                
                        <img className="poll-options" src={props.choiceTwo.img_url} id={props.choiceTwo.id} alt="Ye" width="300" height="300" />
        
                        {props.choiceTwo !== null ? <Button className="poll-button" variant="outline-danger" name="2" onClick={props.voteClickHandler}>Vote</Button> : null}
                
                </Row>
            </Container>
        </div>
    )
}

export default PollImages