var http2 = require("node:http2");
import route from "router";

function server(port, option) {
  return {
    port,
    option,
    route,
    routers: {},
    extend() {},
    handler: {},
    start() {}
  }
}
