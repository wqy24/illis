var http2 = require("node:http2");
import tooladd from "tooladd";

function server(port, option) {
  return {
    port,
    option,
    route(method, path, handler) {},
    extend() {},
    tooladd,
    handler: {},
    start() {}
  }
}
