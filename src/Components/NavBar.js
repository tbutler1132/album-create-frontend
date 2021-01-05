import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

function Welcome(props){
    return (
    <div >
        <Navbar variant="dark" bg="dark">
            <Navbar.Brand href="/tracks">Genesis</Navbar.Brand>
            <Nav>
            
            

                {props.user ?
                <>

                    <NavLink style={{ textDecoration: 'none' }} to="/tracks">
                            
                                Album Page

                    </NavLink>


                    <NavLink to="/profile">
                        <p>Your profile</p>
                    </NavLink>
                    
                    <p onClick={props.logoutHandler}>
                        Logout
                    </p>
                
                </>
                    
                    :
                <>
                
                    <NavLink to="/login">
                        
                            Login
                        
                    </NavLink>
                
                
                    <NavLink to="/signup">
                        
                            Create Account
                        
                    </NavLink>
                
                </>
                }


            </Nav>

        </Navbar>
    </div>
    )
}

export default Welcome