import React from 'react';
// import { withRouter } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {observer} from 'mobx-react'

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
import GoBack from './GoBack.js';
import CounterPage from './components/CounterPage/index.js';
import Page1 from './components/Page1/index.js';
import HomePage from './components/HomePage/index.js';
import GridMemoryGame from './components/GridGame/GridMemoryGame'
import selectTheme from './stores/selectTheme'
import './App.css';
import './custom.css';
import StyledTheme from './appStyle'
import GameResult from './components/GridGame/GameResult'


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
            <Router basename={process.env.PUBLIC_URL}>
        <Switch>

            <Route exact path="/">
                <div>
                    <h2>HOME</h2>
                    <nav>
                        <ul className="projectLists">
                            <li>
                              <Link to="/">Home</Link>
                            </li>
                            <li>
                              <Link to="/carlist">CarList</Link>
                            </li>
                            <li>
                              <Link to="/todoList">TodoList</Link>
                            </li>
                            <li>
                              <Link to="/greeting">Greeting</Link>
                            </li>
                            <li>
                              <Link to="/desert">Desert</Link>
                            </li>
                            <li>
                              <Link to="/selectCity">selectcity</Link>
                            </li>
                            <li>
                              <Link to="/selectState">selectstate</Link>
                            </li>

                            <li>
                              <Link to="/disableBtn">disablebtn</Link>
                            </li>

                            <li>
                              <Link to="/Countries-Dashboard-App">countriesList</Link>
                            </li>
                            <li>
                              <Link to="/emoji-game">Emojis Game</Link>
                            </li>
                            
                            <li>
                              <Link to="/counter-page">counter-page</Link>
                            </li>
                            
                            <li>
                              <Link to="/page-1">page-1</Link>
                            </li>
                            
                            <li>
                              <Link to="/home">React home</Link>
                            </li>

                            <li>
                              <Link to="/grid-game">gridGame</Link>
                            </li>
                            
                            
                          </ul>
                    </nav>
                </div>
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

          {/* <Route exact path="/grid-game/win">
            <GameResult />
          </Route> */}

          <Route exact path="/grid-game">
          <StyledTheme bg={selectTheme.themeStyle.background} color={selectTheme.themeStyle.color}>
          <GridMemoryGame/>          
          </StyledTheme>
          </Route>

          

        </Switch>
    </Router>
        );

    }

}

export default App