import React from "react";
import "./Person.css";
import Radium from "radium";
const person = (props) => {
  return (
    <div className="Person">
      {props.value1 ? (
        <div className="Personin">
          <p onClick={props.click}>
            I am a Geek! Named {props.name} And I am {props.age} years old.
            Number:-
            {Math.floor(Math.random() * 10)}
          </p>
          <p onClick={props.click}>{props.children}</p>
          <label>Enter your name.:-</label>
          {props.varchange ? (
            <input
              type="text"
              onChange={props.change}
              value={props.value}
            ></input>
          ) : null}
        </div>
      ) : (
        <p onClick={props.click}>{props.children}</p>
      )}
    </div>
  );
};

export default Radium(person);
