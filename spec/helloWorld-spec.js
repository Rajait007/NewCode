var request = require("request");
var base_url = "http://localhost:3000/";

var server = require("../app.js");

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    
    /*it("returns  Delhi", function(done) {
      request.get(base_url+"City/delhi/1", function(error, response, body) {
        data.body = JSON.parse(body);
        expect(data.body.City.Name).toBe("DELHI");
        done();
      });
    });*/

    it("returns  Delhi", function(done) {
      request.get(base_url+"1", function(error, response, body) {
        expect(body).toBe("Delhi");
        done();
      });
    });


    it("returns Hello World", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("Hello World!");
        done();

        server.close();
        //10th  sep fail case
      });
    });
  });
});
