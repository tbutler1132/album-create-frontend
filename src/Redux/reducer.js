import {combineReducers} from 'redux'



// const rootReducer = ( currentState = { tracks: [] }, action) => {
//     switch (action.type){
//         case "add_tracks_from_fetch":
//             return {...currentState, tracks: action.payload }
//         default:
//             return currentState
//     }

// }

const defaultState = {
    tracks: [],
    images: []
}

function tracksReducer(currentState = defaultState.tracks, action) {
    switch (action.type) {
        case "add_tracks_from_fetch":
            return action.payload
        default:
            return currentState
    }
}

function imagesReducer(currentState = defaultState.images, action) {
    console.log("Image Payload:", action)
    switch (action.type) {
        case "add_images_from_fetch":
            return action.payload
        case "add_image":
            return [...currentState, action.payload]
        default:
            return currentState
    }
}

const rootReducer = combineReducers({
    tracks: tracksReducer,
    images: imagesReducer
})

export default rootReducer