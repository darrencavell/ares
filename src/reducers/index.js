import { combineReducers } from 'redux'

import wrapperReducer from '../utils/wrapperReducer'

import users from './users'

export default combineReducers({
  users
})