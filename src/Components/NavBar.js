import React from 'react'
import {NavLink} from 'react-router-dom'

function Welcome(){
    return (
    <ul>
        <NavLink to="/signup">
            <li>
                Create Account
            </li>
        </NavLink>
        <NavLink to="/tracks">
            <li>
                Tracks
            </li>
        </NavLink>
    </ul>
    )
}

export default Welcome