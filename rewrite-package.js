const fs = require("fs");
require("dotenv").config();

// read/process package.json
const file = process.cwd() + "/package.json";
const pkg = JSON.parse(fs.readFileSync(file, "utf8"));

// at this point you should have access to your ENV vars
pkg.proxy = `${process.env.API_HOST || "http://localhost"}:${
  process.env.API_PORT || 3001
}`;

// write package.json
fs.writeFileSync(file, JSON.stringify(pkg, null, 2));
