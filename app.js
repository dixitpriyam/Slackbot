var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
var port = process.env.PORT || 1337;
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!'); });
 
app.listen(port, function () {
  console.log('Listening on port ' + port);
});


app.post('/Hello', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Hello ' + userName + ', welcome to Devdactic Slack channel! I\'ll be your guide.'
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});

// app.post('/Hi', function (req, res, next) {
//   var body = JSON.stringify(req.body)
//   var userName = req.body.user_name;
//   var botPayload = {
//     text : 'Hi ' + userName + ', welcome to Devdactic Slack channel! I\'ll be your guide.' +'BODY: '+body
//   };
//   // Loop otherwise..
//   if (userName !== 'slackbot') {
//     return res.status(200).json(botPayload);
//   } else {
//     return res.status(200).end();
//   }
// });


app.post('/Hi', function (req, res, next) {
  //var body = JSON.stringify(req.body)
  //var userName = req.body.user_name;
  // var botPayload = {
  //   text : 'Hi ' + userName + ', welcome to Devdactic Slack channel! I\'ll be your guide.' +'BODY: '+body
  // };

var requestify = require('requestify');

requestify.get('http://analytics-jenkins.cengage.info/api/json')
  .then(function(response) {
      // Get the response body (JSON parsed or jQuery object for XMLs)
      var body = JSON.stringify(response.getBody());

  }
);


var botPayload = {
    text : 'List of all Views: '+body
  }; 

  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});