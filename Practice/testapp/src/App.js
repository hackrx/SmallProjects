import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import Radium from "radium";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      random1: Math.floor(Math.random() * 10),
      persons: [
        { id: "1", name: "Rajat", age: "18" },
        { id: "2", name: "Amitesh", age: "18" },
        { id: "3", name: "Aman", age: "18" },
      ],
      toogle: true,
      showlet: false,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
      random1: Math.floor(Math.random() * 10),
    });
  }
  switchHandle = () => {
    // console.log("Pressesd");
    if (this.state.toogle) {
      this.setState({
        persons: [
          { name: "Rajat", age: "19" },
          { name: "Amitesh", age: "20" },
          { name: "Aman", age: "21" },
        ],
        toogle: false,
        showlet: true,
      });
    } else {
      this.setState({
        persons: [
          { name: "HackRx", age: "18" },
          { name: "Amitesh", age: "18" },
          { name: "Aman", age: "18" },
        ],
        toogle: true,
        showlet: true,
      });
    }
  };

  changeHandler = (event, id) => {
    this.setState({
      persons: [
        { name: "HackRX", age: "18" },
        { name: event.target.value, age: "18" },
        { name: "Aman", age: "18" },
      ],
    });
  };
  tooglepersonHandler = () => {
    const takebollean = this.state.showlet;
    this.setState({ showlet: !takebollean });
  };

  deletepersonHandler = (personindex) => {
    // const personold = this.state.persons.slice();
    const personold = [...this.state.persons];
    personold.splice(personindex, 1);
    this.setState({ persons: personold });
  };

  render() {
    const style = {
      border: "1px solid blue",
      backgroundColor: "white",
      alignItems: "center",
      padding: "2px",
      fontSize: "1.2rem",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "yellow",
      },
    };

    const stylecount = {
      fontSize: "2rem",
    };
    const stylebutton = {
      padding: "1.2rem",
      backgroundColor: "red",
      fontSize: "2rem",
      border: "2px solid blue",
      borderRadius: "30px",
      cursor: "pointer",
      transition: "0.5s linear",
      ":hover": {
        backgroundColor: "white",
      },
    };
    let personshow = null;

    if (this.state.showlet) {
      personshow = (
        <div>
          {this.state.persons.map((person1, index) => {
            return (
              <Person
                value1={true}
                name={person1.name}
                click={() => this.deletepersonHandler(index)}
                age={person1.age}
                // change={(event) => this.changeHandler(event, person1.id)}
              />
            );
          })}
          {(stylebutton.backgroundColor = "green")}
          {/* <Person
            name={this.state.persons[0].name}       
            age={this.state.persons[0].age}
            value1={true}
          ></Person>
          <Person
            change={this.changeHandler}
            varchange={true}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            value1={true}
          ></Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            value1={true}
          ></Person>
          <Person
            click={this.switchHandle.bind(this, "Sarthak")}
            value1={false}
          >
            This is Pretty Interesting!
          </Person> */}
          <p>
            Here is the Random number!
            <span style={stylecount}>{this.state.random1}</span>{" "}
          </p>
          <button ref="sad" style={style} onClick={this.switchHandle}>
            {this.state.toogle ? "Click Me" : "Again Click Me"}
          </button>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hii new Geek!</h1>
        <h2>This is {this.state.date.toLocaleTimeString()}.</h2>
        <button style={stylebutton} onClick={this.tooglepersonHandler}>
          Toggle person
        </button>

        {personshow}
      </div>
    );
  }
}

// function App() {
//   // let state = {
//   //   person: [
//   //     { name: "Rajat", age: 19 },
//   //     { name: "Amitesh", age: 20 },
//   //     { name: "Aman", age: 21 },
//   //   ],
//   // };
//   return (
//     ///This is an JSX code which looks like html code.But we have to use here the accordingly syntax for jsx React syntax
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>Hii there, Learing React is Awsome.</p>
//         <p>It is working!</p>
//         <button>Switch Name</button>
//         {/* <Person
//           name={this.state.person[0].name}
//           age={this.state.person[0].age}
//         ></Person>
//         <Person
//           name={this.state.person[1].name}
//           age={this.state.person[1].age}
//         ></Person>
//         <Person
//           name={this.state.person[0].name}
//           age={this.state.person[0].age}
//         ></Person> */}
//         <Person name="Rajat" age="18"></Person>
//         <Person name="Amitesh" age="20"></Person>
//         <Person name="Aman" age="21">
//           Learn.Code.Repeat
//         </Person>
//       </header>
//     </div>
//     // React.createElement(
//     //   "div",
//     //   { className: "App" },
//     //   React.createElement("h1", null, "Hii there, Learing React is Awsome.")
//     // )
//   );
// }

export default Radium(Clock);
