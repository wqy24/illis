var http2 = require("node:http2");
import router from "router"

function server(port, option) {
  return {
    port,
    option,
    route,
    extend() {},
    handler: {},
    start() {}
  }
}
