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
    results: [],
    polls: [],
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
    switch (action.type) {
        case "add_images_from_fetch":
            return action.payload
        case "add_image":
            return [...currentState, action.payload]
        case "add_result":
            const image = currentState.find(image => image.id === action.payload.winnable.id)
            const imageIndex = currentState.indexOf(image)
            const newArray = currentState.slice()
            const updatedResults = newArray[imageIndex].results.push(action.payload)
            return newArray
        default:
            return currentState
    }
}

function resultsReducer(currentState = defaultState.results, action) {
    return currentState
}

function pollsReducer(currentState = defaultState.polls, action) {
    return currentState
}

const rootReducer = combineReducers({
    tracks: tracksReducer,
    results: resultsReducer,
    images: imagesReducer
})

export default rootReducer