import React from "react";
import ReactDOM from "react-dom";
import Person from "./Person/Person";
import "./index.css";
import App from "./App";
import Radium from "radium";
import * as serviceWorker from "./serviceWorker";
import person from "./Person/Person";

// // // /
//Creating a Clock componenet

ReactDOM.render(<App />, document.getElementById("root"));
// function tick() {
//   ReactDOM.render(<Clock />, document.getElementById("root"));
// }
// setInterval(tick, 1000);

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
