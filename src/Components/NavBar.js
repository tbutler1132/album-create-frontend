import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Welcome(props){
    return (
    <div >
        <Navbar variant="dark" bg="dark">
            <Navbar.Brand >Genesis</Navbar.Brand>
            
            

                {props.user ?
                <>
                <Nav>

                    <NavLink style={{ textDecoration: 'none' }} to="/tracks">
                            
                                Album Page

                    </NavLink>


                    <NavLink style={{ textDecoration: 'none' }} to="/profile">
                        <p>Your profile</p>
                    </NavLink>
                    
                    <p onClick={props.logoutHandler}>
                        Logout
                    </p>
                </Nav>
                </>
                    
                    :
                <>
                <Nav>
                
                    <NavLink to="/login">
                        
                            Login
                        
                    </NavLink>
                
                
                    <NavLink to="/signup">
                        
                            Create Account
                        
                    </NavLink>
                
                </Nav>
                </>
                }



        </Navbar>
    </div>
    )
}

export default Welcome