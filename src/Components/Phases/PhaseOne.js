import React from 'react' 
import { Switch, Route, NavLink } from 'react-router-dom'
import SubmitForm from '../SubmitForm'
import Poll from '../Poll'
import {connect} from 'react-redux'
import {Row, Container, Col} from 'react-bootstrap'



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
        <div className="leaderboard-element" key={element.image.id}>
            <Col>
            <img src={element.image.img_url} alt="Ye" width="150" height="150" />
            <p>Votes: {element.wins}</p>
            </Col> 
        </div> 
        
        )
    }

    clickHandler = () => {
        if (this.state.pollClicked === false){
            this.setState({pollClicked: true})
        }
        else{
            this.setState({pollClicked: false})
        }
    }

    render(){
        return(
            <>
            {this.props.images.length === 0 ? <p>Loading</p> :
            <>

                <>
                <h3>"Vision is a conduit of the fleeting memory"</h3>
                <h4>Phase One: Select the visual stimulations that will guide our sonic journey</h4>
                {/* <Switch> */}
                {/* <Route path="/tracks/:id"
                render={() => */}
                    {this.props.songObj.ref_imgs.length === 0 ? <p>Need Images</p> : 
                    <Container>
                        <div>
                            <Row >
                                <Col className="leaderboard-number">1</Col>
                                <Col className="leaderboard-number">2</Col>
                                <Col className="leaderboard-number">3</Col>
                                <Col className="leaderboard-number">4</Col>
                                <Col className="leaderboard-number">5</Col>
                            </Row>
                            <Row>
                                {this.renderLeaderBoard()}
                            </Row>
                        </div>
                    </Container>
                    }
                    {/* }/> */}
    

            
                        <SubmitForm user={this.props.user} songObj={this.props.songObj}/>
           

                    
                        {this.state.pollClicked ?

                        <Poll filterSubmissions={this.props.filterSubmissions} songObj={this.props.songObj} user={this.props.user} pollClickHandler={this.clickHandler}/>
                        :
                        <p onClick={this.clickHandler}>Generate Poll</p>

                        }
           
                {/* </Switch> */}
                <h4>Select the auditory stimulations that will guide our sonic journey</h4>
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