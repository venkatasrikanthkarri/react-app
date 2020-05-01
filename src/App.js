import React from 'react';
import {
  HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {observer,Provider} from 'mobx-react'

import Home from './components/Home'
import { CarGarage } from './components/CarsList/carList.js';
import { UserMainComponent } from './components/TodoList/index.js';
import { GreetingComponent } from './components/assignment_3/greetingComponent.js';
import { SelectYourDesertComponent } from './components/assignment_3/desertsComponent.js';
import { SelectVisitedCityComponent } from './components/assignment_3/selectVisitedCityComponent.js';
import { StateComponent } from './components/assignment_3/selectStateComponent.js';
import { DisableComponent } from './components/assignment_3/disableBtnComponent.js';
import CountriesDashboardApp from './components/CountriesList/CountryDashBoardApp.js';
import CountryDetails from './components/CountriesList/CountryDetails.js';
import EmojiGame from './components/EmojiGame/EmojiGameComponent/EmojiGame.js';
import CounterPage from './components/CounterPage/index.js';
import Page1 from './components/Page1/index.js';
import HomePage from './components/HomePage/index.js';
import GridMemoryGame from './components/GridGame/GridMemoryGame'
import TodoApp from './components/TodoListUsingMobxStoreandNetworkCalls/TodoApp'
import UsersPage from './components/UsersPage/index.js'
import stores from './stores'
import FetchExample from './components/Fetch'
import TodoAppWithServicesandAPISause from './components/TodoListWithNetworkCallsandServices/TodoApp'
import LogInPage from './components/LogInPage'
import authRoutes from './AuthenticationModule/routes'
import produtsPageRoutes from './E_CommerceAppModule/routes'


import selectTheme from './stores/selectTheme'
import StyledTheme from './appStyle'
import GoBack from './GoBack.js';
import './App.css';
import './custom.css';

@observer
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            themeOptions: {
                title: 'Light'
            }
        }
    }

    static themeOptions = {
        light: {
            id: "0",
            color: 'black',
            background: '#fff',
            title: 'Light'
        },
        dark: {
            id: "1",
            color: 'white',
            background: '#2b3945',
            title: 'Dark',
        }
    }

    onChangeTheme = (event) => {
        if (event.target.innerHTML.includes('Light')) {
            this.setState({ themeOptions: App.themeOptions.dark });

        } else {
            this.setState({ themeOptions: App.themeOptions.light });
        }
    }

    render() {
        return (
          <Provider {...stores}>
            <Router basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/counter-page">
          <CounterPage/>
        </Route>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/carlist">
            <div>
              <GoBack/>
              <CarGarage/>
          </div>
        </Route>

        <Route exact path="/todoList">
          <div>
              <GoBack/>
              <UserMainComponent/>
          </div>
        </Route>

        <Route exact path="/greeting">
        <div>
        <button className="backBtn" type="button" onClick={this.goToPrevious}></button>
        <GreetingComponent/>
        </div>
        </Route>


        <Route exact path="/desert">
          <div>
          <GoBack/>
          <SelectYourDesertComponent/>
          </div>
        </Route>

        <Route exact path="/selectCity">
          <div>
          <GoBack/>
          <SelectVisitedCityComponent />
          </div>
        </Route>

        <Route exact path="/selectState">
          <div>
          <GoBack/>
          <StateComponent />
          </div>
        </Route>

        <Route exact path="/disableBtn">
          <div>
          <GoBack/>
          <DisableComponent />
          </div>
        </Route>

        <Route exact path="/Countries-Dashboard-App">
              <div style={this.state.themeOptions}>
                  <GoBack />
                  <CountriesDashboardApp styles={this.state.themeOptions} onChangeTheme={this.onChangeTheme}  />
              </div>
        </Route>

        <Route exact path="/Countries-Dashboard-App/:countrydetails">
        <div style={this.state.themeOptions}>
          <CountryDetails styles={this.state.themeOptions} onChangeTheme={this.onChangeTheme}  />
        </div>
        </Route>

        <Route exact path="/emoji-game">
        <div>
          <EmojiGame/>
        </div>
        </Route>

        <Route exact path="/grid-game">
        <StyledTheme bg={selectTheme.themeStyle.background} color={selectTheme.themeStyle.color}>
        <GridMemoryGame/>
        </StyledTheme>
        </Route>

        <Route exact path="/Todo-App-mobx">
        <div>
          <TodoApp/>
        </div>
        </Route>

        <Route exact path="/usersName" >
        <UsersPage/>
        </Route>

        <Route exact path="/fetch" >
        <FetchExample/>
        </Route>

        <Route exact path="/todo-list-using-services" >
        <TodoAppWithServicesandAPISause/>
        </Route>

        <Route exact path="/login" >
        <LogInPage/>
        </Route>

        {authRoutes}
        {produtsPageRoutes}

        </Switch>
    </Router>
    </Provider>
        );

    }

}

export default App