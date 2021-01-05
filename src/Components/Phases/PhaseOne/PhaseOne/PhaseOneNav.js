import React from 'react'
import {NavLink} from 'react-browser-router'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function PhaseOneNav(props){

    return(
        <>
        <Container>
            <Row>

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
        <Row>


        
        <Col>
            <LinkContainer to={`/tracks/${props.songObj.id}/${props.songObj.phase}/submitform`}>
                <Button variant="outline-light">Submit an Image</Button>
            </LinkContainer>
        </Col>

        <Col>
            <LinkContainer to={`/tracks/${props.songObj.id}/${props.songObj.phase}/images`}>
                <Button variant="outline-light">See all Images</Button>
            </LinkContainer>
        </Col>
        
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