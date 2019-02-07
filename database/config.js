const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1'
});

client.connect((err, res) => {
  if (err) console.log('Error connecting', err);
  else {
    console.log('connected to cassandra')
  }
});

const insertKeyspace = "CREATE KEYSPACE IF NOT EXISTS espn WITH REPLICATION = { 'class': 'SimpleStrategy', 'replication_factor': 1};";
const useKeyspace = 'USE espn;';
const createTable = 'CREATE TABLE feeds (id uuid, author text, authorphoto text, title text, bigphoto text, smallphoto text, newsfeed text, videoclip text, PRIMARY KEY(id));'


client.execute(insertKeyspace, [], (err, res) => {
  if (err) console.log('ERROR: ', err);
  else {
    console.log('ESPN table created');
  }
});

client.execute(useKeyspace, [], (err, res) => {
  if (err) console.log('ERROR using espn');
  else {
    console.log('Using ESPN keyspace');
  }
});

client.execute(createTable, [], (err, res) => {
  if (err) console.log('ERROR creating table');
  else {
    console.log('Feeds Table created');
  }
});


module.exports = client;

// USE espn;

