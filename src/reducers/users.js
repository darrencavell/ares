import { USERS } from '../utils/actionTypes'

const initial = {
  loading: false,
  error: false,
  data: [
    {
      id: 1,
      fullname: 'Darren Cavell',
      nickname: 'Darren',
      status: 'ONLINE'
    },
  ]
}

export default (state = initial, action) => {
  switch(action.type) {
    case USERS.GET_DETAIL.FETCH:
      return {
        loading: true
      }
    case USERS.GET_DETAIL.SUCCESS:
      return {
        data: action.payload.data
      }
    case USERS.GET_DETAIL.FAILED: 
      return {
        error: true
      }
    case USERS.GET_STATUS:
      return {
        status: state.status
      }
    default:
      return state
  }
}