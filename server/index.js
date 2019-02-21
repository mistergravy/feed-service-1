require('newrelic');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const client = require('../database/config.js');

const app = express();


app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// feed endpoint



// Route to get 10 entries from db

const getFeeds = ('SELECT * FROM espn.feeds LIMIT 10');

app.get('/espn/feeds', (req, res) => {
  client.execute(getFeeds, [], (err, data) => {
    if (err) console.log('ERROR: ', err);
    else {
      console.log(data.rows);
      res.send(data);
    }
  });
});

// Route to get a single entry by ID

app.get('/espn/feed/:id', (req, res) => {
  const getEntry = ('SELECT * FROM espn.feeds WHERE id=?');
  const params = [JSON.parse(req.params.id)];

  client.execute(getEntry, params, { prepare: true }, (err, data) => {
    if (err) console.log('Error: ', err);
    else {
      console.log(data);
      res.send(data.rows);
    }
  });
});

// Route to post new entry to db

// app.post('/espn/feeds', (req, res) => {

// //   {
// //     "id": 302602,
// //     "author": " Brenda Stiedemann",
// //     "authorphoto": " http://lorempixel.com/640/480",
// //     "bigphoto": " http://lorempixel.com/640/480",
// //     "newsfeed": " Porro officia ut. In dolor quidem sapiente sit odio. Dicta dolores at qui sit dolorum sint blanditiis. Molestiae autem suscipit harum maiores.",
// //     "smallphoto": " http://lorempixel.com/640/480",
// //     "timestamp": " 'astringbooya'",
// //     "title": " 'word'",
// //     "videoclip": " http://lorempixel.com/640/480"
// // }

//   const postEntry = ('INSERT INTO espn.feeds VALUES(:id, :author, :authorphoto, :bigphoto, :newsfeed, :smallphoto, :timestamp, :title)')
//   const params = {id:}
// })

// Route to update an entry in db

// Route to delete an entry in db


// Serve static assets if in production
// check to see if the node environment is in production

// if (process.env.NODE_ENV === 'production') {
//   // set static folder
//   // everyone is using create-react-app
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
