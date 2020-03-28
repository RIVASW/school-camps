import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import CampsPage from "./CampsPage"
import configreStore from "../configureStore"
import CampListItemPage from "./CampListItemPage"
import MainPage from "./MainPage"
import ActivitiesPage from "./ActivitiesPage"
import AddCampPage from "./AddCampPage"
import EditCampPage from "./EditCampPage"
import { NavigationBar } from "./NavigationBar"
import { Layuot } from "./Layout"
import { Jumbotron } from "./Jumbotron"

const store = configreStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <React.Fragment>
          <BrowserRouter>
            <NavigationBar/>
            <Jumbotron/>
            <Layuot>
                <Switch>
                  <Route exact path="/" component={MainPage} />
                  <Route path="/camps" component={CampsPage} exact={true} />
                  <Route path="/camps/:id" component={CampListItemPage} />
                  <Route exact path="/activities" component={ActivitiesPage} />
                  <Route exact path="/add" component={AddCampPage} />
                  <Route exact path="/edit/:id" component={EditCampPage} />
                </Switch>    
            </Layuot>
          </BrowserRouter>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App
