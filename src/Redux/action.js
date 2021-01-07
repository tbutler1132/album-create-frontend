export const getTracks = () => {
    return function (dispatch) {
         fetch("http://localhost:3000/songs")
         .then(response => response.json())
         .then(data => dispatch({type: "add_tracks_from_fetch", payload: data}))
    }
}

export const getImages = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/ref_imgs")
        .then(response => response.json())
        .then(data => dispatch({type: "add_images_from_fetch", payload: data}))
   }
}

export const getBeats = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/beats")
        .then(response => response.json())
        .then(data => {
            dispatch({type: "add_beats_from_fetch", payload: data})
            console.log(data)})
   }
}

export const getVocals = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/vocals")
        .then(response => response.json())
        .then(data => dispatch({type: "add_vocals_from_fetch", payload: data}))
   }
}

export const getThreads = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/comment_threads")
        .then(response => response.json())
        .then(data => dispatch({type: "add_threads_from_fetch", payload: data}))
   }
}

export const addCommentToThreads = (commentObj) => {
    return ({type: "add_comment", payload: commentObj})
}

export const addResult = (resultObj) => {
    return ({type: "add_result", payload: resultObj})
}

export const addResultToBeats = (resultObj) => {
    return ({type: "add_result", payload: resultObj})
}

export const addResultToVocals = (resultObj) => {
    return ({type: "add_vocal_result", payload: resultObj})
}


export  const addImage = (imageObj) =>{ return ({ type: "add_image", payload: imageObj}) }

