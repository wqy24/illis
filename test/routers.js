import illis from "../index";
illis(8888, options)
  .route(["GET"], "/", (handler) => handler.stream.respond({":status": 200, "content-type": "text/plain"}, "Hello, World!"))
  .route(["GET"], "/hello", (handler) => handler.stream.respond({":status": 200, "content-type": "text/plain"}, "Hello, again!"))
  .route(["*"], "/:*", (handler) => handler.stream.respond({":status": 404, "content-type": "text/plain"}, "404 Not Found"))
  .start().then(port => {
    console.log("Server running at ${port}");
  });

moudle.exports = {

};
