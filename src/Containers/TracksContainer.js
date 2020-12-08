import React from 'react'
import Track from '../Components/Track'
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
        console.log(this.props)
        return(
            <div>
                {this.renderTracks()}        
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