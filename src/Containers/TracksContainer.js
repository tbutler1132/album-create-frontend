import React from 'react'
import Track from '../Components/Track'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { getTracks } from '../Redux/action'
import { compose } from 'redux'


class TracksContainer extends React.Component {

    componentDidMount = () => {
        this.props.fetchTracks()
    }


    renderTracks = () => {
        return this.props.tracks.map(songObj => <Track key={songObj.id} songObj={songObj} />)
    }

    render(){
        return(
            <>
            {this.props.user ?
                
                <div className="track-index">
                    {this.props.tracks.length === 0 ? <p>Loading</p> : 
                    <Switch>
                        <Route path="/tracks/:id" render={({match}) => {
                            const id = parseInt(match.params.id)
                            const foundTrack = this.props.tracks.find((track) => track.id === id)
                            return <Track songObj={foundTrack} user={this.props.user}/>
                        }}/>
                        <Route path="/tracks" render={() => 
                            this.renderTracks()   
                        } />
                    </Switch>
                    }
                </div>
                
            
            :
            
            <Redirect to='/tracks'/>
            
            }
            </>



        )
        
    }

}

const mapStateToProps = (state) => {
    return {tracks: state.tracks}
}

const mapDispatchToProps = (dispatch) => {
    return {fetchTracks: () => dispatch(getTracks())}
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withRouter)
    (TracksContainer)