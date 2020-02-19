import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'

import { getUserDetail } from './actions/users'

import Home from './views/Home'

const App = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home users={props.users} getUserDetail={props.getUserDetail} />
        </Route>
      </Switch>
    </Router>
  )
}

const mapStateToProps = state => ({
  users: state.users.data
})
const mapDispatchToProps = dispatch => ({
  getUserDetail: userId => dispatch(getUserDetail(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
