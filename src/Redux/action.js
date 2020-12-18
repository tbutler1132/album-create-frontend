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

export const addResultToImages = (resultObj) => {
    return ({type: "add_result", payload: resultObj})
}


export  const addImage = (imageObj) =>{ return ({ type: "add_image", payload: imageObj}) }

