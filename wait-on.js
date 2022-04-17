const waitOn = require("wait-on");
require("dotenv").config();

waitOn({
  resources: [`tcp:${process.env.API_PORT || 3001}`],
  delay: 1000,
});
