import React from 'react' 
import { Switch, Route} from 'react-router-dom'
import SubmitForm from './PhaseOne/SubmitForm'
import {connect} from 'react-redux'
import LeaderBoardTwo from './PhaseTwo/LeaderBoardTwo'
import BeatIndex from '../../ImageIndex'
import PollTwo from './PhaseTwo/PollTwo'



class PhaseTwo extends React.Component {

    

    filterBeats = () => {
        return this.props.filterSubmissions(this.props.beats, this.props.songObj)
    }

    render(){
        console.log(this.props.createLeaderBoard)
        return(
            <>
            {this.props.beats.length === 0 ? <p>Loading</p> :
            <>

                <>
                {/* <h1>{this.props.songObj.title}</h1> */}

              
               
                <Switch>
                    <Route exact path={`/tracks/${this.props.songObj.id}/phasetwo`} render={(match) => <LeaderBoardTwo createLeaderBoard={this.props.createLeaderBoard} submissions={this.props.beats} filterSubmissions={this.filterBeats()} songObj={this.props.songObj}/>}/>
                    <Route path={`/tracks/${this.props.songObj.id}/phasetwo/poll`} render={() => <PollTwo selectPollChoices={this.props.selectPollChoices} filterSubmissions={this.props.filterSubmissions} songObj={this.props.songObj} user={this.props.user} />}/>
                    {/* <Route path={`/tracks/${this.props.songObj.id}/submitform/phasetwo`} render={() => <SubmitForm user={this.props.user} songObj={this.props.songObj}/>}/>
                    <Route path={`/tracks/${this.props.songObj.id}/Beats`} render={() => <ImageIndex filterBeats={this.filterBeats()}/>}/>  */}
                </Switch>

                
                </>

            </>
            }
            </>
        )
    }
}

const msp = (state) => {
    return {beats: state.beats}
}

export default connect(msp)(PhaseTwo)