import axios from 'axios'

import { USERS } from '../utils/actionTypes'

export const getUserDetail = userId => {
  return dispatch => {
    dispatch({ type: USERS.GET_DETAIL.FETCH })
    
    const request = axios({
      method: 'GET',
      url: 'http://localhost:3000/users',
      // headers
    })

    return request.then(
      response => dispatch({ type: USERS.GET_DETAIL.SUCCESS, payload: response }),
      error => dispatch({ type: USERS.GET_DETAIL.ERROR, payload: error })
    )
  }
}

export const getStatus = userId => ({
  type: USERS.GET_STATUS
})