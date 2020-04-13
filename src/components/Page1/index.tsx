import React from "react";
import logo from "../../logo.svg";

function Page1() {
    
  return <div className="bg-gray-800 flex flex-col items-center h-screen justify-center">
  <img src={logo} className="App-logo" alt="logo"/>
  <h1 className="text-green-600">Page 1</h1>
  </div>;
}

export default Page1;
