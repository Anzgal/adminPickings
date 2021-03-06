/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
  ENV
  REGION
  applicationKey
  username
  password
Amplify Params - DO NOT EDIT */

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var Betfair = require('betfair-api-ng');
//var _ = require('underscore');

//certfile = require('./client-2048.crt');
//keyfile = require('./client-2048.key');
//certfile = require('./client-2048.crt');

const fs = require('fs')




// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")

  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/events', function (req, res) {
  // Add your code here
  Betfair.login({
    applicationKey: 'QgcDaxcU67ijYFpo',
    username: 'manzures@2dineapp.com',
    password: 'R7*bp9ZsbQhuL@9',

    certFile: fs.readFileSync('./crt/client-2048.crt', 'utf8'),
    keyFile: fs.readFileSync('./crt/client-2048.key', 'utf8')
  }, function (err, betfair) {
    if (err) {
      console.log("Login Error: ", err);

      res.json({ error: 'error fetchevents', errorCode: err, url: req.url });
      return;
    }

    betfair.betting.listEvents({
      textQuery: 'Juventus'
    }, function (err, res) {
      var event = _.first(res);
      betfair.betting.listMarketCatalogue({
        filter: {
          marketTypeCodes: ['MATCH_ODDS', 'OVER_UNDER_05'],
          eventIds: [event.event.id]
        },
        sort: 'FIRST_TO_START'
      }, function (err, res) {
        console.log(JSON.stringify(res, null, 4));
        res.json({ success: 'Success login!', res: res, url: req.url });

        return;
      });
    });



  })


  //res.json({ success: 'get call succeed!', url: req.url });


});

app.get('/events/*', function (req, res) {
  // Add your code here
  res.json({ success: 'get call succeed!', url: req.url });
});

/****************************
* Example post method *
****************************/

app.post('/events', function (req, res) {

  // Add your code here

  res.json({ success: JSON.stringify(resp, null, 4), url: req.url, body: req.body })
});

app.post('/events/*', function (req, res) {
  // Add your code here
  res.json({ success: 'post call succeed!', url: req.url, body: req.body })
});

/****************************
* Example put method *
****************************/

app.put('/events', function (req, res) {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body })
});

app.put('/events/*', function (req, res) {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body })
});

/****************************
* Example delete method *
****************************/

app.delete('/events', function (req, res) {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url });
});

app.delete('/events/*', function (req, res) {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url });
});

app.listen(3000, function () {
  console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
