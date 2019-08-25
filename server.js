const express = require('express');
const path = require('path');
const app = express();
const appName = 'hello-world-angular';

// Static file serving
app.use(express.static(__dirname + '/dist/' + appName));

// Request router
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/' + appName + '/index.html'));
});

// Heroku port
app.listen(process.env.PORT || 3000);