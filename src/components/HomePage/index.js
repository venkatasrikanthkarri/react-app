
// import React from "react";
// import { Link} from "react-router-dom";
// import logo from "../../logo.svg";

// function App() {

//   // gotoGridScreenIfLoggedIn=()=>{
//   //   return (
//   //     <Redirect
//   //     to={{pathname:'/grid-game'}}/>
//   //   )
//   // }
//   // render(){
//   //   if(true){
//   //     return this.gotoGridScreenIfLoggedIn()
//   //   }
//   // }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Link to="/page-1">Page 1</Link>
//       </header>
//     </div>
//   );
// }

// export default App;





// render(<Counter />, document.getElementById("root"));




import React, { Component } from "react";
import { render } from "react-dom";

class HomePage extends Component {
  state = {
    count: 2,
    count1:1,
  };
  updateCount = () => {
    this.setState({
      count: this.state.count,
    });
    this.setState({count1:2})
  };

  render() {
    console.log("render Counter");
    return (
      <div>
        <p>Count: {this.state.count}</p>
                <p>Count: {this.state.count1}</p>
        <button onClick={this.updateCount}>Update count</button>
      </div>
    );
  }
}


export default HomePage



































