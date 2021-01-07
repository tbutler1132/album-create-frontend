import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import {NavLink} from 'react-browser-router'

class ImageIndex extends React.Component{


    renderImages = () => {
        return this.props.filteredSubmissions.map(image =>
            <div key={image.id} className="image-index">

                <Col>
                <p>{image.title}</p>
                <img src={image.img_url} alt="Ye" width="200" height="200" />
                </Col>

            </div> 
            
            )
    }

    renderAudio = () => {
        return this.props.filteredSubmissions.map(audio =>
            <div key={audio.id} className="image-index">

                <Col>
                <p>{audio.id}</p>
                </Col>

            </div> 
            
            )
    }

    render(){
        return (
            <>
            <Container>
                <Row>
                    <h2>Super Boost: Click your favorite to give it a boost</h2>
                </Row>
                <Row>
                    {this.props.songObj.phase === 1? 
                    this.renderImages()
                    :
                    this.renderAudio()
                    }
                </Row>
            </Container>

            {/* <NavLink to={`/tracks/${this.props.songObj.id}/1`}>
                Return to track page
            </NavLink>  */}
            </>
        )
    }
}

export default ImageIndex