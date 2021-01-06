import React from 'react'
import {connect} from 'react-redux'


class SubmitComment extends React.Component {

    state = {
        content: ""
    }



    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        const newComment = {
            content: this.state.content,
            song_id: this.props.songObj.id,
            comment_thread_id: this.props.threadObj.id,
            user_id: this.props.user.id,
        }
        const options = {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "accept": "application/json"
            },
            body: JSON.stringify({ comment: newComment })
          }
        fetch("http://localhost:3000/comments", options)
        .then(r => r.json())
        .then(commentObj => this.props.submitHandler(commentObj))
    }


    render(){
        return(
            
            <div className="submit-comment-form">
                <form onSubmit={this.submitHandler}>
                        <input type="text" name="content" placeholder="comment" value={this.state.content} onChange={this.changeHandler}/>
                        <input type='submit' name="submit" value="Submit Content"/>
                </form>
            </div>
            
        )
    }
}

const mdp = (dispatch) => {
    return {submitHandler: (commentObj) => dispatch({type: "add_comment", payload: commentObj})}
}

export default connect(null, mdp)(SubmitComment)