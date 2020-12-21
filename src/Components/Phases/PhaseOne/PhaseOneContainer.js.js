import React from 'react' 
import { Switch, Route} from 'react-router-dom'
import SubmitForm from './PhaseOne/SubmitForm'
import Poll from './PhaseOne/Poll'
import {connect} from 'react-redux'
import LeaderBoard from './PhaseOne/LeaderBoard'
import ImageIndex from '../../ImageIndex'
import Thread from '../../../Components/Thread'



class PhaseOne extends React.Component {

    

    filterImages = () => {
        return this.props.filterSubmissions(this.props.images, this.props.songObj)
    }

    renderPhaseOneCommentThread = () => {
        return this.props.commentThread.map(thread => <Thread key={thread.id} threadObj={thread} songObj={this.props.songObj} user={this.props.user}/>)
    }

    render(){
        console.log(this.props.commentThread)
        return(
            <>
            {this.props.images.length === 0 ? <p>Loading</p> :
            <>
            
                <>
                <Switch>
                    <Route exact path={`/tracks/${this.props.songObj.id}/phaseone`} render={(match) => <LeaderBoard createLeaderBoard={this.props.createLeaderBoard} submissions={this.props.images} filterImages={this.filterImages()} songObj={this.props.songObj}/>}/>
                    <Route path={`/tracks/${this.props.songObj.id}/phaseone/poll`} render={() => <Poll voteClickHandler={this.props.voteClickHandler} selectPollChoices={this.props.selectPollChoices} filterSubmissions={this.props.filterSubmissions} songObj={this.props.songObj} user={this.props.user} />}/>
                    <Route path={`/tracks/${this.props.songObj.id}/phaseone/submitform`} render={() => <SubmitForm user={this.props.user} songObj={this.props.songObj}/>}/>
                    <Route path={`/tracks/${this.props.songObj.id}/phaseone/images`} render={() => <ImageIndex songObj={this.props.songObj} filterImages={this.filterImages()}/>}/>
                    <Route path={`/tracks/${this.props.songObj.id}/phaseone/thread`} render={() => this.renderPhaseOneCommentThread()}/>
                </Switch>
                
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

export default connect(msp)(PhaseOne)