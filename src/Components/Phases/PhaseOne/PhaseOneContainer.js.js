import React from 'react' 
import { Switch, Route} from 'react-router-dom'
import SubmitForm from '../../SubmitForm'
import Poll from '../../Poll'
import {connect} from 'react-redux'
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

              
               
                <Switch>
                    <Route exact path={`/tracks/${this.props.songObj.id}`} render={(match) => <LeaderBoard filterImages={this.filterImages()} songObj={this.props.songObj}/>}/>
                    <Route path={`/tracks/${this.props.songObj.id}/poll`} render={() => <Poll filterSubmissions={this.props.filterSubmissions} songObj={this.props.songObj} user={this.props.user} />}/>
                    <Route path={`/tracks/${this.props.songObj.id}/submitform`} render={() => <SubmitForm user={this.props.user} songObj={this.props.songObj}/>}/>
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