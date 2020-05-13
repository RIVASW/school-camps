import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import configreStore from "../configureStore"
import CampListItemPage from "./CampListItemPage"
import MainPage from "./MainPage"
import NavigationBar from "./NavigationBar"
import { Layuot } from "./Layout"
import { Jumbotron } from "./Jumbotron"
import styled from 'styled-components'
import Footer from "./Footer"
import CampForm from "./CampForm"
import CampsList from "./CampsList"
import { ThanksPage } from "./ThanksPage"

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
                    <Route path="/camps" component={() => <CampsList confirmed={true} />} exact={true} />
                    <Route path="/camps/:id" component={CampListItemPage} />
                    <Route exact path="/not_confirmed" component={() => <CampsList confirmed={false} />} />
                    <Route exact path="/add" component={CampForm} />
                    <Route exact path="/edit/:id" component={CampForm} />
                    <Route exact path="/thanks" component={ThanksPage} />
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
