import React from 'react';
import { useHistory } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { CarGarage } from './components/CarsList/carList.js';
import { UserMainComponent } from './components/TodoList/index.js';
import { GreetingComponent } from './components/assignment_3/greetingComponent.js';
import { SelectYourDesertComponent } from './components/assignment_3/desertsComponent.js';
import { SelectVisitedCityComponent } from './components/assignment_3/selectVisitedCityComponent.js';
import { StateComponent } from './components/assignment_3/selectStateComponent.js';
import { DisableComponent } from './components/assignment_3/disableBtnComponent.js';
import CountriesDashboardApp from './components/CountriesList/CountryDashBoardApp.js';
import CountryDetails from './components/CountriesList/CountryDetails.js';

import './custom.css';

class App extends React.Component{
	static themeOptions={
      light: {
        id: "0",
        name: "#fff"
      },
      dark: {
        id: "1",
        name: "#2b3945"
      }
  }

  render()
  {
  	return(
	  		<Switch>

		          <Route exact path="/">
		            <Home />
		          </Route>

		          <Route exact path="/carlist">
		             <Carlist />
		          </Route>

		          <Route exact path="/todoList">
		             <TodoList />
		          </Route>

		          <Route exact path="/greeting">
		             <Greeting />
		          </Route>

		          <Route exact path="/desert">
		             <Desert />
		          </Route>

		          <Route exact path="/selectCity">
		             <SelectCityComponent />
		          </Route>

		          <Route exact path="/selectState">
		             <SelectState />
		          </Route>

		          <Route exact path="/disableBtn">
		             <DisableBtn />
		          </Route>

		          <Route exact path="/Countries-Dashboard-App">
		             <CountriesList />
		          </Route>

		          <Route exact path="/Countries-Dashboard-App/:countrydetails">
		             <Countrydetails/>
		          </Route>
	         </Switch>
	        )


  }
}