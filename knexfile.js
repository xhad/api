module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'ct',
      user:     'ct'
    },
    seeds: {
      directory: './seeds'
    },
    migrations: {
      directory: './migrations'
    }
  },
  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'ct',
      user:     'ct'
    },
    seeds: {
      directory: './seeds'
    },
    migrations: {
      directory: './migrations'
    }
  },
  admin: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'ct',
      user:     'ct'
    },
  },
  travis: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'ct',
      user:     'ct'
    },
  }
};
