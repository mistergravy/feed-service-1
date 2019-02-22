module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'espn',
      user: 'me',
      password: 'coolbeans',
    },
    seeds: {
      directory: './database/seedscripts',
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: 'ec2-18-223-29-31.us-east-2.compute.amazonaws.com',
      database: 'espn',
      user: 'me',
      password: 'coolbeans',
    },
    seeds: {
      directory: './database/seedscripts',
    },
  },

};
