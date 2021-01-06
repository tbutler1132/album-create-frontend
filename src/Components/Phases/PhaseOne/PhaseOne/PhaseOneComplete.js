import React from 'react'
import {Row, Col} from 'react-bootstrap'

function PhaseOneComplete(props){
    
    function winningSubmission (){
        return props.filteredSubmissions.find(submission => submission.selected === true)
    }


    return(
        <div className="winning-image">
        <Row className="winning-image-content">
            <Col className="winner-text" xs={6} md={4}>
                <h2>Selected Image</h2>
            </Col>
            <Col xs={12} md={4}>
                <img src={props.winningSubmission.img_url} alt="Ye" width="250" height="250" />
            </Col>
        </Row>
        </div>
    )
}

export default PhaseOneComplete