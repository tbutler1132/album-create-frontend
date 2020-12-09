import React from 'react'

class Track extends React.Component{

    render(){
        
        return (
        <>
            <h1>{this.props.songObj.title}</h1>
            <p>{this.props.songObj.id}</p>
        </>
        )
    }

}

export default Track

