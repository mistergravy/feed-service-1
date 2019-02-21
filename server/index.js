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

const getFeeds = ('SELECT * FROM espn.feeds');

app.get('/espn/feeds', (req, res) => {
  client.execute(getFeeds, [], (err, data) => {
    if (err) console.log('ERROR: ', err);
    else {
      res.send(data);
    }
  })
});


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
