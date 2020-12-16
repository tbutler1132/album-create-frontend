import React from 'react'
import PhaseOne from './Phases/PhaseOne'
import PhaseContainer from '../Containers/PhaseContainer'
import {Link, Route, Switch} from 'react-router-dom'

class Track extends React.Component{

    render(){

        return (
        <div className="track-show">
            <Switch>
                <Route exact path="/tracks/:id"
        
                    render={() =>
                    <> 
                        <h1>{this.props.songObj.title}</h1>
                        <PhaseContainer songObj={this.props.songObj} user={this.props.user}/>
                    </>
                    } 
                />
            
                <Route path="/tracks" 
                
                    render={() => 
                        <>
                        <Link to={`tracks/${this.props.songObj.id}`}>
                            <h1>{this.props.songObj.title}</h1>
                        </Link>
                            <h2>Phase: {this.props.songObj.phase}</h2>
                        </>
                    }
                />


            </Switch>
        </div>
        )
    }

}

export default Track

