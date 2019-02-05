const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'me',
    password: 'coolbeans',
    database: 'espn',
  },
});

const db = require('bookshelf')(knex);

db.knex.schema.hasTable('feeds').then((exists) => {
  if (!exists) {
    return db.knex.schema.createTable('feeds', (t) => {
      t.increments('id').primary();
      t.string('author', 255);
      t.string('authorphoto', 255);
      t.string('title', 255);
      t.string('bigphoto', 255);
      t.string('smallphoto', 255);
      t.text('newsfeed');
      t.string('videoclip', 255);
      t.timestamp('timestamp').defaultTo(knex.fn.now());
    })
      .then(t => console.log('Created Table:', t))
      .catch(err => console.log('Error creating Table', err));
  }
});

module.exports = db;
