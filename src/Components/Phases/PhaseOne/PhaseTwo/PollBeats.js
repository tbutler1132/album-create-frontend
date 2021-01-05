import React from 'react'

function PollBeats(props){
    return(
        <div>
            <p id={props.choiceOne.id}>{props.choiceOne.id}</p>
            {props.choiceOne !== null ? <button name="1" onClick={props.voteClickHandler}>Vote</button> : null}
            <p id={props.choiceTwo.id}>{props.choiceTwo.id}</p>
            {props.choiceTwo !== null ? <button name="2" onClick={props.voteClickHandler}>Vote</button> : null}
        </div>
    )
}

export default PollBeats