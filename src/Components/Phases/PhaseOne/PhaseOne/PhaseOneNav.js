import React from 'react'
import {NavLink} from 'react-browser-router'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function PhaseOneNav(props){

    return(
        <>
        <Container>
            <Row className="generate-poll-button">

                <Col>   
                    {props.songObj.ref_imgs.length > 0 ?
                    <LinkContainer to={`/tracks/${props.songObj.id}/${props.songObj.phase}/poll`}>
                        <Button variant='outline-success'>Generate a poll</Button>
                    </LinkContainer>
                    :
                    null
                    }
                </Col> 
            </Row>


            <Row className="track-nav-buttons">
                <Col>
                {props.songObj.phase === 1 ? 
                    <LinkContainer to={`/tracks/${props.songObj.id}/${props.songObj.phase}/submitform`}>
                        <Button variant="outline-light">Submit</Button>
                    </LinkContainer>
                :
                <LinkContainer to={`/tracks/${props.songObj.id}/${props.songObj.phase}/audiosubmitform`}>
                    <Button variant="outline-light">Submit</Button>
                </LinkContainer>
                }
                </Col>




                {props.songObj.phase === 1 ? 
                <Col>
                    <LinkContainer to={`/tracks/${props.songObj.id}/${props.songObj.phase}/images`}>
                        <Button variant="outline-light">See all submissions</Button>
                    </LinkContainer>
                </Col>
                               :
                               <LinkContainer to={`/tracks/${props.songObj.id}/${props.songObj.phase}/audio`}>
                                   <Button variant="outline-light">See all</Button>
                               </LinkContainer>
                               }





                
                <Col>
                    <LinkContainer to={`/tracks/${props.songObj.id}/${props.songObj.phase}/thread`}>
                                <Button variant="outline-light">View Discussion</Button>
                    </LinkContainer>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default PhaseOneNav