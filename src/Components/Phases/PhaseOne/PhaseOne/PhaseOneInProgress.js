import React from 'react'
import { Switch, Route, NavLink} from 'react-router-dom'
import LeaderBoard from './LeaderBoard'
import Poll from './Poll'
import SubmitForm from './SubmitForm'
import ImageIndex from '../../../ImageIndex'
import PhaseOneNav from './PhaseOneNav'

class PhaseOneInProgress extends React.Component {
    render(){
        return(
            <>
                <Switch>
                    <div className="track-content">
                        <Route exact path={`/tracks/${this.props.songObj.id}/${this.props.songObj.phase}`} render={(match) => <LeaderBoard filteredSubmissions={this.props.filteredSubmissions} songObj={this.props.songObj}/>}/>
                        <Route path={`/tracks/${this.props.songObj.id}/${this.props.songObj.phase}/poll`} render={() => <Poll type={this.props.type} voteClickHandler={this.props.voteClickHandler} filteredSubmissions={this.props.filteredSubmissions} selectPollChoices={this.props.selectPollChoices} songObj={this.props.songObj} user={this.props.user} />}/>
                        <Route path={`/tracks/${this.props.songObj.id}/${this.props.songObj.phase}/submitform`} render={() => <SubmitForm user={this.props.user} songObj={this.props.songObj}/>}/>
                        <Route path={`/tracks/${this.props.songObj.id}/${this.props.songObj.phase}/images`} render={() => <ImageIndex songObj={this.props.songObj} filteredSubmissions={this.props.filteredSubmissions}/>}/>
                        <Route path={`/tracks/${this.props.songObj.id}/${this.props.songObj.phase}/thread`} render={() => this.props.commentThread}/>
                    </div>
                </Switch>
                    <PhaseOneNav songObj={this.props.songObj}/>
            </>
        )
    }
}

export default PhaseOneInProgress