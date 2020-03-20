import {CREATE_POST, FETCH_POSTS} from './types'

const init = {
    postsStatic: [],
    postsAsync: []
}

export default function (state = init, action) {
    switch (action.type) {
        case CREATE_POST:
            return {...state, postsStatic: [...state.postsStatic, ...action.payload]}
        case FETCH_POSTS:
            return {...state, postsAsync: action.payload}
        default:
            return state
    }
}