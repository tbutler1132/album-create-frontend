import React from 'react'
import {Container, Row} from 'react-bootstrap'
import LeaderboardHeader from './LeaderboardHeader'
import LeaderBoardImages from './LeaderBoardImages'

function LeaderBoard(props){
    
    function noSubmissions(){
        if (props.songObj.phase === 1){
            return(
                <p>Need Images</p>
            )
        } else {
            return (<p>update this</p>)
        } 
    }

    return (
            <>
            <Container>
            {props.songObj.ref_imgs.length === 0 ? noSubmissions() : 
                <div>
                    <LeaderboardHeader />
                    <Row>
                        <LeaderBoardImages filteredSubmissions={props.filteredSubmissions}/>
                    </Row>
                </div>
            }
            </Container>
            </>
        )
}


export default LeaderBoard