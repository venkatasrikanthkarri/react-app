import React,{Component} from 'react'

import { Link } from "react-router-dom"

import {observer} from 'mobx-react'

@observer
class Home extends Component{

    render(){

          return(
          <div>

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

                    <li>
                      <Link to="/Todo-App-mobx">TodoApp</Link>
                    </li>

                    <li>
                      <Link to="/usersName">UsersPage</Link>
                    </li>

                    <li>
                      <Link to="/fetch">Fetch</Link>
                    </li>

                    <li>
                      <Link to="/todo-list-using-services">Todo Services</Link>
                    </li>

                    <li>
                      <Link to="/login">Login</Link>
                    </li>

                    <li>
                      <Link to="/Dashboard">Mqtt</Link>
                    </li>

                    <li>
                      <Link to="/Carousal">Demo Carousal</Link>
                    </li>

                  </ul>
            </nav>
        </div>
        )
        
        
    }

}

export default Home