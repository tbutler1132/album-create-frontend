import React from 'react'

class UserProfile extends React.Component{

    totalContributions = () => {
        return this.props.user.ref_imgs.length + this.props.user.beats.length + this.props.user.vocals.length
    }
    
    reputation = () => {
        const contributionScore = this.totalContributions() * 20
        const pollScore = this.props.user.polls.length / 2
        const commentScore = this.props.user.comments.length
        const rep = contributionScore + pollScore + commentScore
        return Math.round(rep)
    }

    userStats = () => {
        if (this.props.user)
        return (
            <>
            <h1>{this.props.user.username}'s profile</h1>
            <p>Reputation: {this.reputation()}</p>   
            <p>You have submitted {this.totalContributions()} contributions</p>
            <p>You have voted on {this.props.user.polls.length} polls</p>
            <p>You have left {this.props.user.comments.length} comments</p>
            </>
         
        )
    }
    

    render(){
        console.log(this.props.user)
        return(
            <div className="user-profile">
            {this.userStats()}
            </div>
        )
    }

}

export default UserProfile
