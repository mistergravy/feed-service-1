const faker = require('faker');
const db = require('../config.js');
const transform = require('stream-transform');
const generate = require('csv-generate');
const uuid = require('uuid/v4');
const fs = require('fs');

// const ramsFeed = [{
//   id: 1,
//   author: 'Lindsey Thiry',
//   authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
//   title: 'Savannah Smiles',
//   bigphoto: 'https://s3.us-east-2.amazonaws.com/espn-feed-photos/espn+images/lg5.jpg',
//   smallphoto: 'https://s3.us-east-2.amazonaws.com/espn-feed-photos/espn+images/sm5.jpg',
//   newsfeed: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Decode this secret message. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Decode this secret message. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Meow',
//   videoclip: 'https://www.youtube.com/embed/mYXu1xeiYKA',
//   timestamp: '10:35 AM',
// }];

const data = 'id, author, authorphoto, bigphoto, newsfeed, smallphoto, timestamp, title, videoclip' + '\n';

for(let i = 3; i <= 4; i++) {
  fs.writeFile(`/private/tmp/seed${i}.csv`, data, (err) => {
    if (err) console.log('Error: ', err);
    else {
      console.log('Seedfile has been created');
    }
  });
}


function asyncInsert(seedNum) {
  // console.log('counter: ', counter);
  for (let j = 0; j < 50000; j++) {
    const fakeData = `${j}, ${faker.name.findName()}, ${faker.image.imageUrl()}, ${faker.image.imageUrl()}, ${faker.lorem.paragraph()}, ${faker.image.imageUrl()}, 'astringbooya', ${faker.random.word()}, ${faker.image.imageUrl()}` + '\n';


    fs.appendFile(`/private/tmp/seed${seedNum}.csv`, fakeData, (err) => {
      if (err) console.log('error appending file', err);
    });
}
  // counter++;
  // if (counter < 50) {
  //   asyncInsert();
  // }
}
for (let i = 3; i <= 4; i++) {
  asyncInsert(i);
};








// for (let i = 0; i <10; i++) {
//   let name = JSON.stringify(faker.name.findName());

//   const insertRecord = (`INSERT INTO espn.feeds(id, author) VALUES(now(), ${name})`);
//   db.execute(insertRecord, (err, res) => {
//     if (err) console.log('ERROR running seed script', err);
//     else {
//       console.log('Successfully inserted records!', res);
//     }
//   });
// }
