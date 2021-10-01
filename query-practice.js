require("./config/database");
const Movie = require("./models/movie");
const Performer = require("./models/performer");

Promise.resolve()
  .then(function () {
    // 1) Find all movie docs
    return Movie.find({}); // remember to return the promise!
  })
  .then(function (result) {
    return Performer.find({});
  })
  .then(function (result) {
    return Movie.find({ mpaaRating: "PG" });
  })
  .then((result) => {
    return Movie.find({ nowShowing: true });
  })
  .then((result) => {
    return Movie.findOne({ releaseYear: 2018 });
  })
  .then((result) => {
    return Movie.find({ releaseYear: { $gt: 1980 } });
  })
  .then((result) => {
    return Movie.find({ title: { $regex: /^C/i } });
  })
  .then((result) => {
    return Performer.find({ name: "Rami Malek" });
  })
  .then((result) => {
    return Performer.find({ born: { $lt: 1980 } });
  })
  .then((result) => {
    // 10) Find all performers born before 1980
    return Performer.find({ name: { $regex: /^J/i } });
  })
  .then((res) => {
    // 11) Find all performers whose name starts with a 'J'

    return Movie.find({ title: "Caddyshack" });
  })
  .then((res) => {
    // Bill Murray = Performer.find({name: 'Bill Murray'})

    Performer.create({ name: "Bill Murray" }, function (err, performer) {
      // Created the Performer bill Murray
      // Now add the to cast
      res.cast.push(performer);
      res.save(function (err) {
        console.log("There was an error.");
      });
    });
  })
  .then(function () {
    process.exit();
  });
