var { app } = require('../index.js');
var request = require("supertest").agent(app.listen());

describe("Our site", function () {
    it("has expected welcoming message", function (done) {
        request
            .get("/")
            .expect("Koa says hi!")
            .end(done);
    });
});
