import React from 'react' 
import { Switch, Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import Thread from '../../../Components/Thread'
import { getImages} from '../../../Redux/action'
import {filterSubmissions} from '../../../Helpers'
import PhaseInProgress from './PhaseOne/PhaseInProgress'
// import PhaseOneComplete from './PhaseOne/PhaseComplete'



class PhaseOne extends React.Component {

    
    componentDidMount = () => {
        this.props.fetchImages()
    }

    filteredImages = () => {
        return filterSubmissions(this.props.images, this.props.songObj)
    }

    renderCommentThread = () => {
        return this.props.commentThread.map(thread => <Thread key={thread.id} threadObj={thread} songObj={this.props.songObj} user={this.props.user}/>)
    }

    render(){
        return(
            <>
            {this.props.images.length === 0 ? <p>Loading</p> :
            <>
            
                <>
                {/* {this.props.songObj.phase == 1 ?  */}
                <>
                <h3>Phase 1: Select references that will guide the creative direction of our song</h3>
                <br></br>
 
                <PhaseInProgress  type="RefImg" voteClickHandler={this.props.voteClickHandler} filteredSubmissions={this.filteredImages()} commentThread={this.renderCommentThread()} songObj={this.props.songObj} user={this.props.user}/>
 
                </>
                {/* :
                <PhaseOneComplete filteredSubmissions={this.filteredImages()}/>
                } */}
                </>

            </>
            }
            </>
        )
    }
}

const msp = (state) => {
    return {images: state.images}
}

const mdp = (dispatch) => {
    return { 
        fetchImages: () => dispatch(getImages()),
        voteClickHandler: (resultObj) => dispatch({type: "add_result", payload: resultObj})
    }
}

export default connect(msp, mdp)(PhaseOne)