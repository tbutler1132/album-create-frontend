import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import {NavLink} from 'react-browser-router'

class BeatIndex extends React.Component{


    renderImages = () => {
        return this.props.filteredSubmissions.map(image =>
            <div className="image-index">

                <Col>
                <p>{image.title}</p>
                <img src={image.img_url} alt="Ye" width="200" height="200" />
                </Col>

            </div> 
            
            )
    }

    render(){
        console.log(this.props.filterImages)
        return (
            <>
            <Container>
            <Row>
                <h2>Super Boost: Click your favorite to give it a boost</h2>
            </Row>
            <Row>
                {this.renderImages()}
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