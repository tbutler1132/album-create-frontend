import React from 'react'
import {connect} from 'react-redux'
import {Col, Container, Row} from 'react-bootstrap'

class LeaderBoard extends React.Component{

createLeaderboard = () => {
    if(this.props.images.length > 0){
        const wins = this.props.filterImages.map(image => image.results.length)
        const imagesWithWins = []
        this.props.filterImages.forEach(function(v,i){
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

    render(){
        return(
            <Container>
            {this.props.songObj.ref_imgs.length === 0 ? <p>Need Images</p> : 
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
            }
            </Container>
        )
    }
}


const msp = (state) => {
    return {images: state.images}
}

export default connect(msp)(LeaderBoard)