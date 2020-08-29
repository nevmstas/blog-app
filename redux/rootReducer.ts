import { combineReducers } from 'redux'
import { postsReducer } from './postsReducer'
import { appReducer } from './appReducer'

// COMBINED REDUCERS
export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer
})

export type RootState = ReturnType<typeof rootReducer>

