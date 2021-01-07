import React from 'react'
import {Container, Row} from 'react-bootstrap'
import LeaderboardHeader from './LeaderboardHeader'
import LeaderBoardImages from './LeaderBoardImages'
import AudioLeaderBoard from './AudioLeaderBoard'

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
        props.songObj.phase === 1 ?
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

        :
        <>
        <Container>
        {props.songObj.ref_imgs.length === 0 ? noSubmissions() : 
            <div>
                <Row>
                    <AudioLeaderBoard filteredSubmissions={props.filteredSubmissions}/>
                </Row>
            </div>
        }
        </Container>
        </>
        )
}


export default LeaderBoard