import { get } from "request";
var base_url = "http://localhost:3000/";
import { close } from "../app.js";

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 500", function(done) {
      get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(500);
        done();
      });
    });

    it("returns Hello World", function(done) {
      get(base_url, function(error, response, body) {
        expect(body).toBe("Hello World");
        done();

        close();
        //10th  sep 2nd fail case
        //
      });
    });
  });
});
