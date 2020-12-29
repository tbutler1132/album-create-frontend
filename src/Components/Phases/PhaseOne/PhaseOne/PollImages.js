import React from 'react'

function PollImages(props){
    return(
        <div>
            <img src={props.choiceOne.img_url} id={props.choiceOne.id} alt="Ye" width="300" height="300" />
            {props.choiceOne !== null ? <button name="1" onClick={props.voteClickHandler}>Vote</button> : null}
            <img src={props.choiceTwo.img_url} id={props.choiceTwo.id} alt="Ye" width="300" height="300" />
            {props.choiceTwo !== null ? <button name="2" onClick={props.voteClickHandler}>Vote</button> : null}
    </div>
    )
}

export default PollImages