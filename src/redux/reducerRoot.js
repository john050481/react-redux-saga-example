import {combineReducers} from "redux";

import reducerApp from './reducerApp'
import reducerPosts from './reducerPosts'

export const reducerRoot = combineReducers({
    app: reducerApp,
    posts: reducerPosts
})
