const axios = require("axios");

exports.getPackageData = axios.create({
  baseURL: `http://registry.npmjs.org`,
  header: { "Access-Control-Allow_Origin": "*" }
});
