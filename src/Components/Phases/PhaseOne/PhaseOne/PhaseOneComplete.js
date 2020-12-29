import React from 'react'

function PhaseOneComplete(props){
    
    function winningSubmission (){
        return props.filteredSubmissions.find(submission => submission.selected === true)
    }


    return(
        <>
        <img src={props.winningSubmission.img_url} alt="Ye" width="150" height="150" />
        </>
    )
}

export default PhaseOneComplete