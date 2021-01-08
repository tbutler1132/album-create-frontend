import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Welcome(props){
    return (
    <div >
        {/* <Navbar variant="dark" bg="dark">
            <Navbar.Brand >Genesis</Navbar.Brand> */}
            
            

                {props.user ?
                <>
                
                    <Navbar bg="light" variant="light">
                        <Navbar.Brand >TuneCollab</Navbar.Brand>
                        
                        <Nav className="mr-auto">

                            <LinkContainer to="/tracks">
                                <Nav.Link >Album</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/profile">
                                <Nav.Link >Profile</Nav.Link>
                            </LinkContainer>

                            <Nav.Link className="logout-button" onClick={props.logoutHandler}>Logout</Nav.Link>
                        </Nav>
                    </Navbar>
                
                </>
                    
                    :
                <>
                    <Navbar bg="light" variant="light">
                        <Navbar.Brand href="#home">TuneCollab</Navbar.Brand>
                        
                        <Nav className="mr-auto">

                            <LinkContainer to="/login">
                                <Nav.Link >Login</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/signup">
                                <Nav.Link >Signup</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar>
                
                
                
                
                {/* <Nav>
                
                    <NavLink to="/login">
                        
                            Login
                        
                    </NavLink>
                
                
                    <NavLink to="/signup">
                        
                            Create Account
                        
                    </NavLink>
                
                </Nav> */}
                </>
                }



        {/* </Navbar> */}
    </div>
    )
}

export default Welcome