import React from 'react'
import {NavLink} from 'react-browser-router'

function PhaseOneNav(props){

    return(
        <>
        <NavLink to={`/tracks/${props.songObj.id}/${props.songObj.phase}/submitform`}>Submit an Image</NavLink>
        <br></br>
        {props.songObj.ref_imgs.length > 0 ?
        <NavLink to={`/tracks/${props.songObj.id}/${props.songObj.phase}/poll`}>Create a poll</NavLink>
        :
        null
        }
        <NavLink to={`/tracks/${props.songObj.id}/${props.songObj.phase}/images`}>
        <h3>See all Images</h3>
        </NavLink>
        </>
    )
}

export default PhaseOneNav