import React from 'react'
import {NavLink, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {addImage} from '../../../../Redux/action'

class SubmitForm extends React.Component {

    state = {
        imageUrl: "",
        title: ""
    }



    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        const newRefImg = {
            title: this.state.title,
            img_url: this.state.imageUrl,
            selected: false,
            user_id: this.props.user.id,
            song_id: this.props.songObj.id
        }
        const options = {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "accept": "application/json"
            },
            body: JSON.stringify({ ref_img: newRefImg })
          }
        fetch("http://localhost:3000/ref_imgs", options)
        .then(r => r.json())
        .then(refImgObj => this.props.submitHandler(refImgObj))
    }


    render(){
        return(
            
            <div className="submit-form">
                <form onSubmit={this.submitHandler}>
                        <input type="text" name="imageUrl" placeholder="url" value={this.state.imageUrl} onChange={this.changeHandler}/>
                        <input type='text' name="title" placeholder="title" value={this.state.title} onChange={this.changeHandler} />
                        <input type='submit' name="submit" value="Submit Image"/>
                </form>
            </div>
            
        )
    }
}

const mdp = (dispatch) => {
    return {submitHandler: (refImgObj) => dispatch({type: "add_image", payload: refImgObj})}
}

export default connect(null, mdp)(SubmitForm)