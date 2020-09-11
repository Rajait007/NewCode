var request = require("request");
const frisby = require('frisby');
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

    
    describe("GET /page/summary/{title}", function() {
 
      it("should return the summary for the given page title", function(done) {
      frisby
        .get(base_url+"City/delhi/1")
        .then(function(response) {
          expect(response.status).toBe(200);
          expect(response.json.Name).toBe("Delhi");
          expect(response.json.Code).toBe(1);
        })
        .done(done);
    })
 
  }); 

    it("returns only Delhi", function(done) {
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
