import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

function PollBeats(props){
    return(
        <div>
                <ReactAudioPlayer
                id={props.choiceOne.id}
                src={`http://localhost:3000/${props.choiceOne.audio_data.url}`}
                controls
                />
            {props.choiceOne !== null ? <button name="1" onClick={props.voteClickHandler}>Vote</button> : null}
            <ReactAudioPlayer
                id={props.choiceTwo.id}
                src={`http://localhost:3000/${props.choiceTwo.audio_data.url}`}
                controls
                />
            {props.choiceTwo !== null ? <button name="2" onClick={props.voteClickHandler}>Vote</button> : null}
        </div>
    )
}

export default PollBeats