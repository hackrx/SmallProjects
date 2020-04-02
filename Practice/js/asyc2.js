window.onload = function() {
  //Understanding concept of generating function..
  // This time we are using get method which is a part of jquery

  console.log("Code from asnyc2.js");
  /*
//Declaring a generating function
//Generating function are the function which are pauseable 
function, which can be pause by using yield keyword.line-coverage
way of defining of generating function
*/

  function* gen() {
    var x = 10;
    console.log(x);

    //It will further only execute with .next() function.
    x = yield 10;

    console.log("Hii from gen() function");
    var y = yield 20;
    console.log(`In gen function called Third time`);

    /*//Now when this function is called js executers the declaration 
    //in Right to left way which means when it finds yield keyword
        it will execute only one time only if gen() function is called 
        using .next() function and then further in function it d=finds 
        yield then it will stop there and return back and again execute
        the further variables one by one if function gen() is called
        using .next() function.
    */
  }
  //Now calling the gen() function

  var callgen = gen();
  //It will not call the function it only makes it ready to call
  //calling using .next function

  console.log(callgen.next());
  //Now on calling gen() function it return value and done status
  //done status will be false if it does not done with with all parameters
  //it return false for first time with value: 10//calling again
  console.log("Calling again callgen func using .next()");
  console.log(callgen.next());

  //calling third time
  console.log(callgen.next());
};
