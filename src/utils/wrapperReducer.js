import wrapperType from './wrapperType'

export default (type, initialData) => (state = {
  loading: true,
  data: initialData || []
}, action) => {
  console.log(state)
  switch(action.type) {
    case wrapperType(type).FETCH:
      return {
        ...state,
        loading: true
      }
    case wrapperType(type).SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false
      }
    case wrapperType(type).ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}