var express = require('express');
var app = express();

//go to index.html
app.use(express.static(__dirname + "/app"));

app.listen(process.env.PORT || 3000);