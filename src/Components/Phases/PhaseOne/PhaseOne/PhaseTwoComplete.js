import React from 'react'

function PhaseTwoComplete(props){
    
    function winningSubmission (){
        return props.filteredSubmissions.find(submission => submission.selected === true)
    }


    return(
        <p>{props.winningSubmission.id}</p>
    )
}

export default PhaseTwoComplete