import React from 'react'

function PhaseOneComplete(props){
    
    function winningSubmission (){
        return props.filteredSubmissions.find(submission => submission.selected === true)
    }


    return(
        <>
            <img src={props.winningSubmission.img_url} alt="Ye" width="250" height="250" />
        </>
    )
}

export default PhaseOneComplete