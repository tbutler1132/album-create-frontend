import React from 'react'
import {connect} from 'react-redux'
import { getImages } from '../../Redux/action'

class PhaseOne extends React.Component {

    componentDidMount = () => {
        this.props.fetchImages()
    }

    filterImages = () => {
        if(this.props.images.length > 0){
            return this.props.images.filter(image => image.song.id === this.props.songObj.id)
        }
        else{
            return []
        }
    }

    render(){
        console.log(this.filterImages())
        return(
            <>
            {this.props.images.length === 0 ? <p>Loading</p> :
            <>
            <h3>"Vision is a conduit of the fleeting memory"</h3>
            <h4>Phase One: Select the visual and auditory stimulations that will guide our sonic journey</h4>
            {this.props.songObj.ref_imgs.length === 0 ? <p>Need Images</p> : <img src={this.props.images[0].img_url} alt="Ye" width="300" height="300"/>}
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
    return {fetchImages: () => dispatch(getImages())}
}

export default connect(msp, mdp)(PhaseOne)