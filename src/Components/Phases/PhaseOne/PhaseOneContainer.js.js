import React from 'react' 
import { Switch, Route, NavLink } from 'react-router-dom'
import SubmitForm from '../../SubmitForm'
import Poll from '../../Poll'
import {connect} from 'react-redux'
import {Row, Container, Col} from 'react-bootstrap'
import LeaderBoard from '../../LeaderBoard'



class PhaseOne extends React.Component {

    

    filterImages = () => {
        return this.props.filterSubmissions(this.props.images, this.props.songObj)
    }

    render(){
        console.log(this.props.user)
        return(
            <>
            {this.props.images.length === 0 ? <p>Loading</p> :
            <>

                <>
                <h1>{this.props.songObj.title}</h1>
                <p className="song-description">{this.props.songObj.description}</p>
                <h3>"Vision is a conduit of the fleeting memory"</h3>
                <h4>Phase One: Select the visual stimulations that will guide our sonic journey</h4>
              
               
                <Switch>
                    <Route exact path={`/tracks/${this.props.songObj.id}`} render={(match) => <p>{match.match.url}</p>}/>
                    <Route path={`/tracks/${this.props.songObj.id}/leaderboard`} render={(match) => <LeaderBoard filterImages={this.filterImages()} songObj={this.props.songObj}/>}/>
                    <Route path={`/tracks/${this.props.songObj.id}/poll`} render={() => <Poll filterSubmissions={this.props.filterSubmissions} songObj={this.props.songObj} user={this.props.user} />}/>
                </Switch>
                <SubmitForm user={this.props.user} songObj={this.props.songObj}/>

                <h4><br></br>Select the auditory stimulations that will guide our sonic journey</h4>
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