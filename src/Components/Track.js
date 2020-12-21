import React from 'react'
import PhaseOne from './Phases/PhaseOne/PhaseOneContainer.js'
import PhaseContainer from '../Containers/PhaseContainer'
import {Link, Route, Switch} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'


class Track extends React.Component{

    renderPhaseDescriptions = () => {
        if (this.props.songObj.phase === 1){
            return <p>Select references</p>
        } else if (this.props.songObj.phase === 3){
            return <p>Select vocals</p>
        }
        else {
           return null
        }
    }

    render(){

        return (
        <div className="track-show">
            <Switch>
                <Route path="/tracks/:id"
        
                    render={(match) =>
                    {
                        return <PhaseContainer songObj={this.props.songObj} user={this.props.user}/>
                    }

                    } 
                />
            
                
                
                  
                        <>
                        <Container >
                            <Row>
                            <Col>
                            <Link to={`tracks/${this.props.songObj.id}/phaseone`} style={{ textDecoration: 'none' }} className="track-navlink">
                                <h1>{this.props.songObj.title}</h1>
                            </Link>
                            </Col>
                            <Col>
                                <h4>Phase: {this.props.songObj.phase}</h4>
                                <h5>{this.renderPhaseDescriptions()}</h5>
                            </Col>
                            </Row>
                        </Container>
                        </>
           


            </Switch>
        </div>
        )
    }

}

export default Track

