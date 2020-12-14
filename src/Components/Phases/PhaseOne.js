import React from 'react'


class PhaseOne extends React.Component {

    // filterImages = () => {
    //     if(this.props.images.length > 0){
    //         return this.props.images.filter(image => image.song.id === this.props.songObj.id)
    //     }
    //     else{
    //         return []
    //     }
    // }

    renderImages = () => {
        return this.props.filterSubmissions(this.props.images, this.props.songObj).map(image => <img src={image.img_url} alt="Ye" width="300" height="300" key={image.id}/> )
    }

    render(){
        console.log(this.props.filterSubmissions(this.props.images, this.props.songObj).length)
        return(
            <>
            {this.props.images.length === 0 ? <p>Loading</p> :
            <>
            <h3>"Vision is a conduit of the fleeting memory"</h3>
            <h4>Phase One: Select the visual and auditory stimulations that will guide our sonic journey</h4>
            {this.props.songObj.ref_imgs.length === 0 ? <p>Need Images</p> : this.renderImages()}
            </>
            }
            </>
        )
    }
}

export default PhaseOne