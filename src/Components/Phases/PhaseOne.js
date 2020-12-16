import React from 'react' 
import { Switch, Route, NavLink } from 'react-router-dom'
import SubmitForm from '../SubmitForm'
import {connect} from 'react-redux'


class PhaseOne extends React.Component {

    renderImages = () => {
        return this.props.filterSubmissions(this.props.images, this.props.songObj).map(image => <img src={image.img_url} alt="Ye" width="300" height="300" key={image.id}/> )
    }

    render(){
        console.log(this.props.images)
        return(
            <>
            {this.props.images.length === 0 ? <p>Loading</p> :
            <>

                <>
                <h3>"Vision is a conduit of the fleeting memory"</h3>
                <h4>Phase One: Select the visual and auditory stimulations that will guide our sonic journey</h4>
                {this.props.songObj.ref_imgs.length === 0 ? <p>Need Images</p> : this.renderImages()}
                <SubmitForm user={this.props.user} songObj={this.props.songObj}/>
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