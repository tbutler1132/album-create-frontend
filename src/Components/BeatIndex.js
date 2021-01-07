import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import {NavLink} from 'react-browser-router'
import ReactAudioPlayer from 'react-audio-player';

class BeatIndex extends React.Component{


    renderAudio = () => {
        return this.props.filteredSubmissions.map(audio =>
            <div className="audio-index">

                <Col>
                <p>{audio.title}</p>
                <img src={audio.img_url} alt="Ye" width="200" height="200" />
                </Col>

            </div> 
            
            )
    }

    render(){
        console.log(this.props.filterAudio)
        return (
            <>
            <Container>
            <Row>
                <h2>Super Boost: Click your favorite to give it a boost</h2>
            </Row>
            <Row>
                {this.renderAudio()}
            </Row>
            </Container>
            <NavLink to={`/tracks/${this.props.songObj.id}/phaseone`}>
                Return to track page
            </NavLink> 
            </>
        )
    }
}

export default BeatIndex