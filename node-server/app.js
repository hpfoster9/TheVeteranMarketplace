var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var cors = require("cors")
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://Team01:vJ1nGO8MpHqP49SL@cluster0-shard-00-00-ppp7l.mongodb.net:27017,cluster0-shard-00-01-ppp7l.mongodb.net:27017,cluster0-shard-00-02-ppp7l.mongodb.net:27017/Team01DB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
var dbo;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  dbo = db.db("Team01DB");
});

app.listen(6969);
app.use(cors())

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/Login', jsonParser, function (req, res) {
  console.log("LOGGING IN");
  dbo.collection("tvm-users").findOne({'email':req.body.email,'password':req.body.password}, function(err, result) {
  if (err){
  	res.send({'success': "error"})
  	throw err;
  }
  else if(result === null){
  	res.send({'success': false})
  }
  else{
  	res.send({'success': true, 'user':result})
  }
  });
 
})

app.get('/', function(req,res){
	res.send("Successful");
})

// POST /signup gets urlencoded bodies
app.post('/Signup', jsonParser, function (req, res) {
  console.log("Signing up");
  dbo.collection("tvm-users").findOne({'email':req.body.email}, function(err, result) {
  	if (err){
	  	res.send({'success': "error"})
	  	throw err;
  	}
  	else if(result != null){
  		res.send({'success': false, 'msg': 'email already registered'})
  	}
  	else{
  		dbo.collection("tvm-users").insertOne({'email':req.body.email,'password':req.body.password}, function(err, result) {
		if (err){
			res.send({'success': "error"})
		  	throw err;
		}
		else{
		  	res.send({'success': true, 'password':result.password})
		}
  	})
  }
 });
})

// CLEAR ALL
app.post('/Clear', jsonParser, function (req, res) {
  console.log("Deleting all");
  dbo.collection("tvm-users").deleteMany({}, function(err, result) {
  	if (err){
	  	res.send({'success': "error"})
	  	throw err;
  	}
  	else{
  		res.send({'success': true, 'docs': dbo.collection("tvm-users").count()})
  	}
  });
})
