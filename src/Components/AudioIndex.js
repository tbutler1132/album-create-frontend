import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import {NavLink} from 'react-browser-router'
import ReactAudioPlayer from 'react-audio-player';

class AudioIndex extends React.Component{


    renderAudio = () => {
        return this.props.filteredSubmissions.map(audio =>
            <div  key={audio.id}>
                <ReactAudioPlayer
                src={`http://localhost:3000/${audio.audio_data.url}`}
                controls
                />
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
            </>
        )
    }
}

export default AudioIndex