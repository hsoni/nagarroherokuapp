// Update with your config settings.
var config = require('./config');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : 'ec2-35-170-4-198.compute-1.amazonaws.com',
      user : 'u5al67l5mqiap3',
      password : 'pebcfe53d7281c1d9f0d1639fdb1231494e04aa511744fbf281c1f438b30c43b7',
      database : 'dbr8dvina7u4mh',
      ssl:true
    }
  },

  production: {
    client: 'pg',
    connection: {
      host : 'ec2-35-170-4-198.compute-1.amazonaws.com',
      user : 'u5al67l5mqiap3',
      password : 'pebcfe53d7281c1d9f0d1639fdb1231494e04aa511744fbf281c1f438b30c43b7',
      database : 'dbr8dvina7u4mh',
      ssl:true
    }
  }

};
