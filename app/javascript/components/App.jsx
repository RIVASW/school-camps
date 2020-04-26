import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import CampsPage from "./CampsPage"
import configreStore from "../configureStore"
import CampListItemPage from "./CampListItemPage"
import MainPage from "./MainPage"
import ActivitiesPage from "./ActivitiesPage"
import NavigationBar from "./NavigationBar"
import { Layuot } from "./Layout"
import { Jumbotron } from "./Jumbotron"
import styled from 'styled-components';
import Footer from "./Footer"
import AddCampForm_Hooks from "./AddCampForm_Hooks"

const MainWrapper = styled.section`
  background-color: #f2f4f5;
`;

const store = configreStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <React.Fragment>
          <BrowserRouter>
            <NavigationBar/>
            <Jumbotron/>
            <MainWrapper>
              <Layuot>
                  <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/camps" component={CampsPage} exact={true} />
                    <Route path="/camps/:id" component={CampListItemPage} />
                    <Route exact path="/activities" component={ActivitiesPage} />
                    <Route exact path="/add" component={AddCampForm_Hooks} />
                    <Route exact path="/edit/:id" component={AddCampForm_Hooks} />
                  </Switch>    
              </Layuot>
            </MainWrapper>
            <Footer/>
          </BrowserRouter>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App
