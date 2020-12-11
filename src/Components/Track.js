import React from 'react'
import {NavLink, Route} from 'react-router-dom'

class Track extends React.Component{

    render(){

        return (
        <>

            <NavLink to={`tracks/${this.props.songObj.id}`}>
                <h1>{this.props.songObj.title}</h1>
            </NavLink>
            <Route path="/tracks/:id"
                render={() => <p>{this.props.songObj.id}</p>} />

        </>
        )
    }

}

export default Track

