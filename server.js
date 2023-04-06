var http2 = require("http2");

function server(port, option) {
  return {
    port,
    option,
    route(method, path, handler) {},
    extend() {},
    handler: {},
    start() {}
  }
}
