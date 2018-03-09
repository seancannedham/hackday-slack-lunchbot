var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {res.status(200).send('Hello World!'); });

app.listen(port, function() {
  console.log('Listenting on port ' + port);
});

app.post('/lunch', function(req, res, next)
{
  var input = req.body.text;
  var username = req.body.user_name;

  var botPayLoad = {
    text: "Hello World"
  };

  if (username !== 'slackbot'){
    return res.status(200).json(botPayLoad);
  } else {
    return res.status(200).end();
  }
});

// app.post('/aws_inbound', function(req, res, next){
//   var input = req.body.text;
//   var username = req.body.user_name;
//
//   var botPayLoad = {
//     text: "yah yeet"
//   };
//
//   if (username !== 'slackbot'){
//     return res.status(200).json(botPayLoad);
//   } else {
//     return res.status(200).end();
//   }
//
// });
