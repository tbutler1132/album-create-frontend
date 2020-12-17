import React from 'react' 
import { Switch, Route, NavLink } from 'react-router-dom'
import SubmitForm from '../SubmitForm'
import Poll from '../Poll'
import {connect} from 'react-redux'


class PhaseOne extends React.Component {

    state = {
        pollClicked: false
    }

    filterImages = () => {
        return this.props.filterSubmissions(this.props.images, this.props.songObj)
    }

    createLeaderboard = () => {
        if(this.props.images.length > 0){
            const wins = this.filterImages().map(image => image.results.length)
            const imagesWithWins = []
            this.filterImages().forEach(function(v,i){
                const obj = {};
                obj.image = v;
                obj.wins = wins[i];
                imagesWithWins.push(obj);
            });
            const i = imagesWithWins.sort(function (l, r) {
                return r.wins - l.wins;
            });
            return [i[0], i[1], i[2], i[3], i[4]]
        }
    }
    
    renderLeaderBoard = () => {
        return this.createLeaderboard().map(element =>
        <div key={element.image.id}>
            <p>Votes: {element.wins}</p>
            <img src={element.image.img_url} alt="Ye" width="300" height="300" /> 
        </div> 
        
        )
    }

    clickHandler = () => {
        this.setState({pollClicked: true})
    }

    render(){
        return(
            <>
            {this.props.images.length === 0 ? <p>Loading</p> :
            <>

                <>
                <h3>"Vision is a conduit of the fleeting memory"</h3>
                <h4>Phase One: Select the visual and auditory stimulations that will guide our sonic journey</h4>
                {this.props.songObj.ref_imgs.length === 0 ? <p>Need Images</p> : this.renderLeaderBoard()}
                <SubmitForm user={this.props.user} songObj={this.props.songObj}/>
                {this.state.pollClicked ? 
                    <Poll filterSubmissions={this.props.filterSubmissions} songObj={this.props.songObj} user={this.props.user}/>
                    :
                    <p onClick={this.clickHandler}>Generate Poll</p>
                }
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