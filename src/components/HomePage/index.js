
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




// import React, { Component } from "react";
// import { render } from "react-dom";

// class HomePage extends Component {
//   state = {
//     count: 2,
//     count1:1,
//   };
//   updateCount = () => {
//     this.setState({
//       count: this.state.count,
//     });
//     this.setState({count1:2})
//   };

//   render() {
//     console.log("render Counter");
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//                 <p>Count: {this.state.count1}</p>
//         <button onClick={this.updateCount}>Update count</button>
//       </div>
//     );
//   }
// }


// export default HomePage




































// export default App;


import React from "react";
import { render } from "react-dom";

class ListItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.value === nextProps.value) {
      return false;
    }
    return true;
  }

  render() {
    console.log("new item");
    return <li>{this.props.value}</li>;
  }
}

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numbers: [0, 10, 20, 30, 40, 50] };
  }
  renderListItems = () => {
    const { numbers } = this.state;
    return numbers.map((number, index) => (
      <ListItem key={index} value={number} />
    ));
  };

  addNumberToList = () => {
    const { numbers } = this.state;

    this.setState({
      numbers: [...numbers, numbers.length * 10],
    });
  };

  render() {
    return (
      <div>
        <ul>{this.renderListItems()}</ul>
        <button onClick={this.addNumberToList}>Add number</button>
      </div>
    );
  }
}

// render(<App />, document.getElementById("root"));



// import React, { Component } from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14}>

//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />

//         <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>Google Maps</h1>
//             </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyDvTCFe0l93fqAQsn5vj5iA8xhdB5wdB3s")
// })(MapContainer)
