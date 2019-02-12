const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Feeds = require('../database/Collections/feed.js');
const Feed = require('../database/Models/FeedDB.js');

const app = express();

app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* GET latest 10 records */

app.get('/espn/feeds', (req, res) => {
  Feeds.query((qb) => {
    qb.limit(10);
  })
    .orderBy('timestamp', 'DESC')
    .fetchAll()
    .then((data) => {
      const records = data.models;
      return records.map((rec) => {
        return rec.attributes;
      });
    })
    .then(rows => res.send(rows))
    .catch(err => console.log(err))
});

/* GET single record by ID */

app.get('/espn/feeds/:id', (req, res) => {
  const { id } = req.params;
  new Feed({id: id})
    .fetch()
    .then((data) => {
      res.send(data);
    })

});

/* POST record to db */

app.post('/espn/feeds', (req, res) => {

  // Representative of object that would be received from client

  let body = {
    id: 10000000,
    author: 'Dana Rempel',
    authorphoto: 'http://lorempixel.com/28/28',
    title: 'Baby Fresh Central',
    bigphoto: 'http://lorempixel.com/600/400',
    smallphoto: 'http://lorempixel.com/200/150',
    newsfeed: 'Suscipit sint dignissimos. Suscipit ut ipsum facere eligendi qui. Facere dolorum quae natus necessitatibus.',
    videoclip: 'https://www.youtube.com/embed/nKLkj0FzoEo',
    timestamp: '2019-02-05T16:47:23.692Z'
  };

  new Feed({id: body.id})
    .fetch()
    .then((exists) => {
      if (!exists) {
        Feed.forge(body)
          .save(null, {method: 'insert'})
          .then(() => console.log('Record saved'))
      } else {
        console.log('Record already exists');
      }
      res.status(200).send(body);
    });
});


// "id": 0,
// "author": "Dana Rempel",
// "authorphoto": "http://lorempixel.com/28/28",
// "title": "Baby Fresh Central",
// "bigphoto": "http://lorempixel.com/600/400",
// "smallphoto": "http://lorempixel.com/200/150",
// "newsfeed": "Suscipit sint dignissimos. Suscipit ut ipsum facere eligendi qui. Facere dolorum quae natus necessitatibus.",
// "videoclip": "https://www.youtube.com/embed/nKLkj0FzoEo",
// "timestamp": "2019-02-05T16:47:23.692Z"

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
