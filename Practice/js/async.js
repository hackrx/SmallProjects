window.onload = function() {
  // xml HTTP request object
  var http = new XMLHttpRequest();
  //There are few different mehods to make HTTP REQUESTS
  //WE are using openmehod() tells javascript that where we want to get data from
  //weather we want it to be synchronous or asynchronous,the type of request we want to make

  http.open("GET", "json/tweets.json", true);

  //It basically defines the request method, file from where we want to get the data , a boolean value
  //which is defines as true for asynchronous and false for synchronouis request

  http.onreadystatechange = function() {
    // console.log(http);
    if (http.readyState == 4 && http.status == 200) {
      //   console.log(JSON.parse(http.response));
    }
  };

  //JQUERY MEthod
  //we are using jquery here now in complment of vanilla js
  //here we just need to use the $.get() mehod which done all thing for us
  //And it makes async request , it takes two parameters, first from where we want data
  //and second is call back function which is called after the data is retrived
  $.get("json/tweets.json", function(data) {
    console.log(data);
  });

  console.log("Test for asyc behaviour");
  //Now we have to tell the js to grab that data
  http.send();
  //   console.log(http);
};

/*
There are total 4 ready states when we call a HTTP request

0: request not initialised
1: request has been set up
2 : request has been sent
3: request is in process
4: request is complete
*/

//Now callback functions

let arrayamimal = ["Rabbit", "Dog", "Elephant", "Lion"];

arrayamimal.forEach(function(val) {
  console.log(val);
});
//Now this is a synch call back

console.log("After anmimal array");
