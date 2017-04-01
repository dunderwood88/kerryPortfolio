var env = process.env.NODE_ENV || 'deployment'
  , cfg = require('./config.'+ env);

module.exports = cfg;