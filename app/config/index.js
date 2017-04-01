var env = process.env.NODE_ENV || 'production'
  , cfg = require('./config/config.'+ env);

module.exports = cfg;