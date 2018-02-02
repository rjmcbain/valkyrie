const request = require('request');
const db = require('../models');
const Users = db.models.Users;

// function hello(req, res){					//This is what the
// 	console.log('hello!!!');							//user sees when
// };	

function index(req, res) {
    Users.findAll().then(function(users) {
			// console.log(users);
      res.json(users);
    });
  }

  function create(req, res) {
	Users.create(req.body).then(function(user){
	  if(!user) res.send("user not saved");
	  res.json(user);
	});
  }
// module.exports.hello = hello;
module.exports.index = index;
module.exports.create = create;