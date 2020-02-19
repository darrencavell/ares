import wrapperType from './wrapperType'

export default (type, method, { host, path, query }) => (dispatch) => {
  const url = `${host}/${path}?${query}`

  const fetch = () => ({
    type: wrapperType(type).FETCH
  })
  const success = payload => ({
    type: wrapperType(type).SUCCESS,
    payload
  })
  const error = error => ({
    type: wrapperType(type).ERROR,
    error
  })

  dispatch(fetch())
  return axios({ method, url, data })
    .then(response => { dispatch(success(response)) })
    .catch(response => { dispatch(error(response)) })

}