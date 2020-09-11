const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/1', (req, res) => res.send('Delhi'))
var server = app.listen(3000, () => {

    console.log("Listening on port " + server.address().port + "...");


});
//this is test
//addinglines to create the version
//test
//testing on 28th 
//3rd sep
//3rd sep 11:34 PM IST
//3rd sep 11:42 PM IST 
// 4th sep 7:37 PM IST 

module.exports = server;