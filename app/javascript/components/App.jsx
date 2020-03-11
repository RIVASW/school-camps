import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import CampsPage from "./CampsPage"
import configreStore from "../configureStore"
import CampListItemPage from "./CampListItemPage"
import MainPage from "./MainPage"
import ActivitiesPage from "./ActivitiesPage"
import styles from "../styles/styles"
import AddCampPage from "./AddCampPage"

const store = configreStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/camps" component={CampsPage} exact={true} />
            <Route path="/camps/:id" component={CampListItemPage} />
            <Route exact path="/activities" component={ActivitiesPage} />
            <Route exact path="/add" component={AddCampPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
