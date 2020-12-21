import React from 'react'
import {connect} from 'react-redux'
import SubmitComment from './SubmitComment'

class Thread extends React.Component{


    findThread = () => {
        return this.props.threads.find(thread => thread.id === this.props.threadObj.id)
    }

    renderComments = () => {
    const usernames = this.findThread().comments
    return usernames.map(comment =>
        <div key={comment.id} className="comments"> 
        <p>{`${comment.user.username}: ${comment.content}`}</p>
        </div>
    )
    }

    render(){
        return(
            <div className='comment'>
            {this.renderComments()}
            <SubmitComment threadObj={this.props.threadObj} songObj={this.props.songObj} user={this.props.user}/>
            </div>
        // <p>{this.props.thread.comments[0].user.username}: {this.props.thread.comments[0].content}</p>
        )
    }
}

const msp = (state) => {
    return {threads: state.threads}
}

export default connect(msp)(Thread)