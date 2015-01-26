var limit = require('express-better-ratelimit');

module.exports = limit({
  duration: 30000, //30 seconds
  max: 300
  //blackList: ['127.0.0.1']
});