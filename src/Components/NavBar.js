import React from 'react'
import {NavLink} from 'react-router-dom'

function Welcome(props){
    return (
    <ul>
        <NavLink to="/tracks">
            <li>
                Album Page
            </li>
        </NavLink>
        {props.user ?
        <>
            <li onClick={props.logoutHandler}>Logout</li>
        </>
            
            :
         <>
        <NavLink to="/login">
            <li>
                Login
            </li>
        </NavLink>

        <NavLink to="/signup">
            <li>
                Create Account
            </li>
        </NavLink>
        </>
        }
    </ul>
    )
}

export default Welcome