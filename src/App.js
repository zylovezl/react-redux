import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Route, HashRouter as Router } from 'react-router-dom'

import createHistory from 'history/createHashHistory'
const history = createHistory()


import HomeContainer from './containers/home/homeContainers'
import Login from './containers/login/Login'
import Register from './containers/register/register'

export default class App extends React.Component {

  render() {

      return (
          <Router history={history}>
              <Route render={({ location }) => {
                  return(
                          <div key={location.pathname}>
                              <Route location={location} exact path="/" component={HomeContainer} />
                              <Route location={location} path="/login" component={Login} />
                              <Route location={location} path="/register" component={Register} />
                          </div>

                  )
              }}/>
          </Router>
    );
  }
}
