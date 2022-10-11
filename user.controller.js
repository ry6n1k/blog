const User = require("./user.model");

exports.addUser = function (request, response) {
  response.render("create.hbs");
};

exports.getUsers = function (request, response) {
  response.render("users.hbs", {
    users: User.getAll(),
  });
};

exports.postUser = function (request, response) {
  const userName = request.body.name;
  const userAge = request.body.age;
  const user = new User(userName, userAge);
  user.save();
  response.redirect("/users");
};
