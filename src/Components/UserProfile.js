import React from 'react'

class UserProfile extends React.Component{

    totalContributions = () => {
        return this.props.user.ref_imgs.length + this.props.user.beats.length + this.props.user.vocals.length
    }
    
    reputation = () => {
        const contributionScore = this.totalContributions() * 2
        const pollScore = this.props.user.polls.length / 2
        return contributionScore + pollScore
    }

    userStats = () => {
        if (this.props.user)
        return (
            <>
            <h1>{this.props.user.username}'s profile</h1>
            <p>Reputation: {this.reputation()}</p>   
            <p>You have submitted {this.totalContributions()} contributions</p>
            <p>You have voted on {this.props.user.polls.length} polls</p>
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
