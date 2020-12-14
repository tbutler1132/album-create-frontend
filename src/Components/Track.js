import React from 'react'
import PhaseOne from './Phases/PhaseOne'
import {Link, Route, Switch} from 'react-router-dom'

class Track extends React.Component{

    render(){

        return (
        <div className="track-show">
            <Switch>
                <Route path="/tracks/:id"
        
                    render={() =>
                    <> 
                        <h1>{this.props.songObj.title}</h1>
                        <PhaseOne songObj={this.props.songObj}/>
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

