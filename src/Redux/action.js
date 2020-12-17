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
    ({type: "add_result", payload: resultObj})
}


export  const addImage = (imageObj) => ({ type: "add_image", payload: imageObj})

