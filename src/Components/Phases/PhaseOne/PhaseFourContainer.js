import React from 'react' 
import { Switch, Route} from 'react-router-dom'
import SubmitForm from './PhaseOne/SubmitForm'
import {connect} from 'react-redux'
import LeaderBoardThree from './PhaseThree/LeaderBoardThree'
import PollThree from './PhaseThree/PollThree'
import BeatIndex from '../../ImageIndex'
// import PollThree from './PhaseThree/PollThree'



class PhaseFour extends React.Component {

    

    filterVocals = () => {
        return this.props.filterSubmissions(this.props.vocals, this.props.songObj)
    }

    render(){
        console.log(this.props.vocals)
        return(
            <>
            {this.props.vocals.length === 0 ? <p>Loading</p> :
            <>

                <>
                {/* <h1>{this.props.songObj.title}</h1> */}

              
               
                <Switch>
                    <Route exact path={`/tracks/${this.props.songObj.id}/phasethree`} render={(match) => <LeaderBoardThree createLeaderBoard={this.props.createLeaderBoard} submissions={this.props.vocals} filterSubmissions={this.filterVocals()} songObj={this.props.songObj}/>}/>
                    <Route path={`/tracks/${this.props.songObj.id}/phasethree/poll`} render={() => <PollThree selectPollChoices={this.props.selectPollChoices} filterSubmissions={this.props.filterSubmissions} songObj={this.props.songObj} user={this.props.user} />}/>
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
    return {vocals: state.vocals}
}

export default connect(msp)(PhaseFour)