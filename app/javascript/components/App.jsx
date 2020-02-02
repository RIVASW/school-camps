import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import HelloWorld from "./HelloWorld"
import configreStore from "../configureStore"

const store = configreStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => ("Home!")} />
            <Route path="/hello" render={() => <HelloWorld greeting="friend"/>} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
