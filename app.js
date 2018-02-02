var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 1337;

var worksvotes =0;
var royalelectricvotes=0;
var buongustovotes =0;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {res.status(200).send('Hello World!'); });

app.listen(port, function() {
  console.log('Listenting on port ' + port);
});

app.post('/lunch', function(req, res, next)
{
  var input = req.body.text;
  var username = req.body.user_name;
 // var option = getVotedOption(text); //not sure what the format of text is, defer impl this fn
input = input.lower();

if(input == 'works'){
  worksvotes++;
} else if(input == 'buon gusto'){
  buongustovotes++;
} else {
  royalelectricvotes++;
}

var output = "works - " + worksvotes + '\n'
              + "buon gusto - " + buongustovotes + '\n'
              + "royal electric - " + royalelectricvotes;

  var botPayLoad = {
    text: output
  };
  //var botPayLoad will be set here
  //return res.status(200).json(botPayLoad)
  if (username !== 'slackbot'){
    return res.status(200).json(botPayLoad);
  } else {
    return res.status(200).end();
  }
});
