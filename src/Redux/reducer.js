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
    images: [],
    beats: [],
    vocals: [],
    threads: []
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
            console.log(action.payload)
            const image = currentState.find(image => image.id === action.payload.winnable.id)
            const imageIndex = currentState.indexOf(image)
            const newArray = currentState.slice()
            const updatedResults = newArray[imageIndex].results.push(action.payload)
            return newArray
        default:
            return currentState
    }
}

function beatsReducer(currentState = defaultState.beats, action) {
    switch (action.type) {
        case "add_beats_from_fetch":
            return action.payload
        case "add_beat_result":
            console.log(action.payload)
            const beat = currentState.find(beat => beat.id === action.payload.winnable.id)
            const beatIndex = currentState.indexOf(beat)
            const newArray = currentState.slice()
            const updatedResults = newArray[beatIndex].results.push(action.payload)
            return newArray
        default:
            return currentState
    }
}

function vocalsReducer(currentState = defaultState.vocals, action) {
    switch (action.type) {
        case "add_vocals_from_fetch":
            return action.payload
        case "add_vocal_result":
            console.log(action.payload)
            const vocal = currentState.find(vocal => vocal.id === action.payload.winnable.id)
            const vocalIndex = currentState.indexOf(vocal)
            const newArray = currentState.slice()
            const updatedResults = newArray[vocalIndex].results.push(action.payload)
            return newArray
        default:
            return currentState
    }
}

function resultsReducer(currentState = defaultState.results, action) {
    return currentState
}

function threadsReducer(currentState = defaultState.threads, action) {
    switch (action.type) {
        case "add_threads_from_fetch":
            return action.payload
        case "add_comment":
            const thread = currentState.find(comment => comment.id === action.payload.comment_thread.id)
            const threadIndex = currentState.indexOf(thread)
            const newArray = currentState.slice()
            const updatedResults = newArray[threadIndex].comments.push(action.payload)
            console.log("new array", newArray)
            return newArray
        default:
            return currentState
    }
}

function pollsReducer(currentState = defaultState.polls, action) {
    return currentState
}

const rootReducer = combineReducers({
    tracks: tracksReducer,
    results: resultsReducer,
    images: imagesReducer,
    beats: beatsReducer,
    vocals: vocalsReducer,
    threads: threadsReducer
})

export default rootReducer