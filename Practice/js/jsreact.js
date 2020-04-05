//You can try this code on codepen and understand the concept.
// Files are:- ModernJavaScript_React.html , css/jsrreact.css , jsreact.js
// Importing module in java can be very usefull
//Syntax to make codetry.js having try function to exportable is export default codetry;
//
//You can skip using constructor in modern javascript
//simply assign myproperty='value'
//But along with this you should use arrow function
//In which u can use .this without error
//Spread operator (...) is used to aplit up array elements OR object properties
//Rest operator (...) which is pretty similiar to //Spread operator but the difference is it copies all //the properties of that element into another thing
const numbers = [1, 2, 3];
const newnumbers = [...numbers, 4, 5];
console.log(newnumbers);
//This will print [1,2,3,4,5]

// const person1={
//   name="Rajat"
// };
// const newperson={
// ...person1,
//   age:28
// };
//Using filter keyword

const filtercom = (...args) => {
  return args.filter((el) => el % 2 === 0);
};
console.log(filtercom(1, 2, 4, 9, 8, 3, 1));

//Destructure easily extract array elements or object properties and them in variables
//Assigning variable to another is just creating a pointer.And can be change if u change something in the first element.
const number2 = [1, 2, 3];
[num1, num2] = number2;
console.log(num1);
console.log(num2);
//Now to copy the element completely you can use spread (...) operator to make copy of that element

//map is an array method which can perform a operation or expression on each element of the array;
//number2;

const doublenum = number2.map((num) => {
  return num * 2;
});
console.log(doublenum);

function Person(props) {
  //creating react component
  //Function name should start from capital name;
  return (
    <div class="person">
      <h1>{props.name}</h1>
      <p>Your Age is {props.age}.</p>
    </div>
  );
}

var app = (
  <div class="flex">
    <Person name="Max" age="28" />
    <Person name="Harry" age="30" />
  </div>
);

//We have to render this react component
// ReactDOM.render(<Person name="Max" age="28" />,document.querySelector('#show'));

// ReactDOM.render(<Person name="Harry" age="30" />,document.querySelector('#show2'));
ReactDOM.render(app, document.querySelector("#app"));

function User(props) {
  return (
    <div class="user-details">
      <h2>User Info</h2>
      <ol>
        <li>Name:- {props.name}</li>
        <li>UID:-{props.uid} </li>
        <li>Department:-{props.department} </li>
      </ol>
    </div>
  );
}

var detail = (
  <div class="flex">
    <User name="Rajat" uid="18BCS1930" department="CSE" />
    <User name="Amitesh" uid="18BCS2107" department="CSE" />
    <User name="Aman" uid="18BCS2159" department="CSE" />
  </div>
);

ReactDOM.render(detail, document.querySelector("#user"));
