import React from 'react';

class MyHome extends React.Component{
	render(){
		return (
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
              </ul>
        </nav>
    </div>
    );
	}
}