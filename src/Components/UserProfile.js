import React from 'react'

class UserProfile extends React.Component{

    totalContributions = () => {
        if (this.props.user)
        return (
            <>   
            <p>You have submitted {this.props.user.ref_imgs.length + this.props.user.beats.length + this.props.user.vocals.length} contributions</p>
            <p>You have voted on {this.props.user.polls.length} polls</p>
            </>
         
        )
    }
    

    render(){
        console.log(this.props.user)
        return(
            <>
            {this.totalContributions()}
            </>
        )
    }

}

export default UserProfile
