var chai = require("chai");
import illis from "../index";

illis(8888, options).route(["GET"], "/", (handler) => {
  handler.stream.respond({
    ":status": 200,
    "content-type": "text/plain"}
  );
  handler.stream.end("Hello World!");
}).route(["GET"], "/hello", handler => {
  handler.stream.respond({
    ":status": 200,
    "content-type": "text/plain"
  });
  handler.stream.end("Hello Again!");
}).route(["*"], "/:*", handler => {
  handler.stream.respond({
    ":status": 404,
    "content-type": "text/plain"
  });
  handler.stream.end("404 Not Found");
}).start().then(port => {
  // console.log("Server running at ${port}");
  test(port);
});

function test(port) {
  moudule.exports = {
    "Port": {
      "should be 8888": () => {
        chai.expect(port).to.equal(8888);
      }
    }

  }
}
