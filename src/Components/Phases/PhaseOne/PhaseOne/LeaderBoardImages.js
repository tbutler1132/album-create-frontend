import React from 'react'
import {createLeaderBoard} from '../../../../Helpers'
import {Col} from 'react-bootstrap'

function LeaderBoardImages(props){

    function renderImagesLeaderBoard (){
        return createLeaderBoard(props.filteredSubmissions).map(element =>
        <div className="leaderboard-element" key={element.submission.id}>
            <Col>
            <img src={element.submission.img_url} alt="Ye" width="150" height="150" />
            <p>Votes: {element.wins}</p> 
            </Col> 
        </div> 
        
        )
    }

    return(
        <>
            {renderImagesLeaderBoard()}
        </>
    )
}

export default LeaderBoardImages