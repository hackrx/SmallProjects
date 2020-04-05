console.log("this bot is working");

var Twit = require("twit"); //Importing twit module inside this index.js
//Now u r required to implement Oauth here for this u need to use twitter key
var config = require("./config-eg"); //Importing config file.//Please make sure you have entered all keys accordingly.
// console.log(config);
var T = new Twit(config);

//Now getting data from twitter API

// var lookingfor = { q: "node", count: 2 }; //Breaking stuffs in pieces.
// T.get("search/tweets", lookingfor, getdata); //get data is a callback function

// function getdata(err, data, response) {
//   let tweets = data.statuses;
//   for (let i = 0; i < tweets.length; i++) {
//     console.log("Text recieved is : ", tweets[i].text);
//   }
//   //   console.log(data);
// }

//Now posting first tweet using this, It can be 'My First Tweet'
// let mytweet = { status: "My first Tweet Using Twitter API" };

// T.post("statuses/update", mytweet, statuscallback);
// //Define call back function for posting status, for just imagine if you got an error in reference
// //to api key or exceeded the word limit i.e 128 I think so it will give u an error.
// function statuscallback(err, data, response) {
//   if (err) {
//     console.log("Something wrong has happened!..");
//   } else {
//     console.log("Tweeted successfully!..");
//   }
// }

// Getting user names list of persons who follows Modiji😂, quite funny lets do it.
// let targetusername = { screen_name: "narendramodi" };

// T.get("followers/ids", targetusername, follcall);

// function follcall(err, data, response) {
//   if (err) {
//     console.log("Something wrong has happened!..");
//   } else {
//     let count = 50;

//     console.log(data);
//     console.log("Found successfully!..");
//   }
// }

//Now a function on which calling you can tweet a post.now tweeter not have some kinf od do's and don't which you
//must have to follow like you can not tweet a same post again.
// so lets create a new one fun and we will use Math.random () fun. to diff. the posts.

// let mytweet = { status: "My first Tweet Using Twitter API" };
//You can Also schedule this function using setInterval function by giving two parametrs in it.1st is function name that is to be called, and
// and in what interval it should be I am setting here in every 1 minute
tweetit();

setInterval(tweetit, 1000 * 20);

function tweetit() {
  let twno = Math.floor(Math.random() * 100);
  let newtweet = { status: "My " + twno + " :) Tweet Using Twitter API" };
  T.post("statuses/update", newtweet, statuscallback);
  //Define call back function for posting status, for just imagine if you got an error in reference
  //to api key or exceeded the word limit i.e 128 I think so it will give u an error.
  function statuscallback(err, data, response) {
    if (err) {
      console.log("Something wrong has happened!..");
    } else {
      console.log("Tweeted successfully!..");
    }
  }
}

//Now let's try to set up User streaming
// console.log("Following is starting");
// var stream1 = T.stream("user");

// //When anyone follows me :)
// stream1.on("follow", runfollwed);

// function runfollwed(eventdata) {
//   let name = eventdata.source.name;
//   let screenname = eventdata.source.screen_name; //It is the twitter acc. name that follows you

//   tweetit("@" + screenname + " Here I am");
// }

// function tweetit(txt) {
//   let newtweet = { status: txt + "Thanks for following me" };
//   T.post("statuses/update", newtweet, statuscallback);
//   //Define call back function for posting status, for just imagine if you got an error in reference
//   //to api key or exceeded the word limit i.e 128 I think so it will give u an error.
//   function statuscallback(err, data, response) {
//     if (err) {
//       console.log("Something wrong has happened!..");
//     } else {
//       console.log("Tweeted successfully!..");
//     }
//   }
// }

// var stream = T.stream("statuses/sample");

// stream.on("tweet", function(tweet) {
//   console.log(tweet);
// });
