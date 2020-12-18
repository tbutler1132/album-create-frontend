import React from 'react'
import PhaseOne from './Phases/PhaseOne/PhaseOneContainer.js'
import PhaseContainer from '../Containers/PhaseContainer'
import {Link, Route, Switch} from 'react-router-dom'

class Track extends React.Component{

    render(){

        return (
        <div className="track-show">
            <Switch>
                <Route path="/tracks/:id"
        
                    render={(match) =>
                    {
                        console.log(match)
                        return <PhaseContainer songObj={this.props.songObj} user={this.props.user}/>
                    }

                    } 
                />
            
                
                
                  
                        <>
                        <Link to={`tracks/${this.props.songObj.id}`}>
                            <h1>{this.props.songObj.title}</h1>
                        </Link>
                            <h2>Phase: {this.props.songObj.phase}</h2>
                        </>
           


            </Switch>
        </div>
        )
    }

}

export default Track

