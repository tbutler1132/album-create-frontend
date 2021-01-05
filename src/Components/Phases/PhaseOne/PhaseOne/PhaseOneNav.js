import React from 'react'
import {NavLink} from 'react-browser-router'

function PhaseOneNav(props){

    return(
        <>
        {props.songObj.ref_imgs.length > 0 ?
        <NavLink to={`/tracks/${props.songObj.id}/${props.songObj.phase}/poll`}>Create a poll</NavLink>
        :
        null
        }
        <br></br>
        <NavLink to={`/tracks/${props.songObj.id}/${props.songObj.phase}/submitform`}>Submit an Image</NavLink>
        <NavLink to={`/tracks/${props.songObj.id}/${props.songObj.phase}/images`}>
        <h5>See all Images</h5>
        </NavLink>
        </>
    )
}

export default PhaseOneNav