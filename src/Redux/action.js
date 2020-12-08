export const getTracks = () => {
    console.log("ass")
    return function (dispatch) {
        console.log("tits")
         fetch("http://localhost:3000/songs")
         .then(response => response.json())
         .then(data => dispatch({type: "add_tracks_from_fetch", payload: data}))
    }
}