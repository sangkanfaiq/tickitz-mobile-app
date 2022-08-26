import { combineReducers } from "redux"
import Movies from './Movies'
import Auth from './Auth'
import Register from './Register'
import Cinema from './Cinema'

const rootReducer = combineReducers ({
    movies: Movies,
    auth: Auth,
    register: Register,
    cinema: Cinema,
})

export default rootReducer