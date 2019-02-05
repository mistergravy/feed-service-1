const db = require('../config.js');
const Feed = require('../Models/FeedDB.js');

const Feeds = new db.Collection();

Feeds.model = Feed;

module.exports = Feeds;
