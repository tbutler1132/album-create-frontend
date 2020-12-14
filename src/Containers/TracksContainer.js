import React from 'react'
import Track from '../Components/Track'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { getTracks } from '../Redux/action'


class TracksContainer extends React.Component {

    // state = {
    //     trackArray: [],
    //     pollResults: []
    // }

    componentDidMount = () => {
        this.props.fetchTracks()
    }


    renderTracks = () => {
        return this.props.tracks.map(songObj => <Track key={songObj.id} songObj={songObj} />)
    }

    render(){
        return(
            <div className="track-index">
                {this.props.tracks.length === 0 ? <p>Loading</p> : 
                <Switch>
                    <Route path="/tracks/:id" render={({match}) => {
                        const id = parseInt(match.params.id)
                        const foundTrack = this.props.tracks.find((track) => track.id === id)
                        return <Track songObj={foundTrack}/>
                    }}/>
                    <Route path="/tracks" render={() => 
                        this.renderTracks()   
                    } />
                </Switch>
                }
            </div>
        )
        
    }

}

const mapStateToProps = (state) => {
    return {tracks: state.tracks}
}

const mapDispatchToProps = (dispatch) => {
    return {fetchTracks: () => dispatch(getTracks())}
}

export default connect(mapStateToProps, mapDispatchToProps)(TracksContainer)