window.onload = function() {
  //Now we are going to call the data from json file

  genwrap(function*() {
    var tweets = yield $.get("json/tweets.json");
    console.log(tweets);

    var friends = yield $.get("json/friends.json");
    console.log(friends);

    var blogs = yield $.get("json/blog.json");
    console.log(blogs);
  });

  //Now defining function
  function genwrap(generate) {
    var gen = generate();
    function handle(yielded) {
      if (!yielded.done) {
        yielded.value.then(function(data) {
          //   console.log(gen.next());
          return handle(gen.next(data));
        });
      }
    }
    return handle(gen.next());
  }
};
