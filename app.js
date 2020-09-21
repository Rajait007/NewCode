const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/1', (req, res) => res.send('Delhi'))

app.get('/City/:CityName/:CityCode', function(req, res) {
   var name=req.params.CityName.toUpperCase() 
   var code1=req.params.CityCode
    var data = {
        "City": {
            "Name": name,
             "Code": code1
        }
    }; 
console.log(data);
    res.send(data)
});

app.get('/Hospital/:HospitalName', function(req, res) {
    var name=req.params.HospitalName.toUpperCase();
    var Type1="dental";
     var data = {
         "Hospital": {
             "Name": name,
              "type": Type1
         }
     }; 
 console.log(data);
     res.send(data)
 });
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
// 21st sep 
//21st test with eslint

module.exports = server;