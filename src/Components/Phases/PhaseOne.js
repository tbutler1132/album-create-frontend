import React from 'react'

class PhaseOne extends React.Component {
    render(){
        console.log(this.props.songObj)
        return(
            <>
            <h3>"Vision is a conduit of the fleeting memory"</h3>
            <h4>Phase One: Select the visual and auditory stimulations that will guide our sonic journey</h4>
            {this.props.songObj.ref_imgs.length === 0 ? <p>Need Images</p> : <img src={this.props.songObj.ref_imgs[0].img_url} alt="Ye" width="300" height="300"/>}
            </>
        )
    }
}

export default PhaseOne