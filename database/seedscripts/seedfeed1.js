const faker = require('faker');
const fs = require('fs');
const uuid = require('uuid/v4');
const data = [];
const moment = require('moment-timezone');

for (let i = 0; i < 500000; i++) {
  const fakeData = `${uuid()}, ${faker.name.findName()}, ${faker.image.imageUrl()}, ${faker.image.imageUrl()}, ${faker.lorem.paragraph()}, ${faker.image.imageUrl()}, ${moment().tz('America/Chicago').format()}, ${faker.lorem.word()}, ${faker.image.imageUrl()}`;
  data.push([fakeData]);
}

let string = '';

data.forEach((row) => {
  string = string + row.join(',') + '\n';
})

fs.appendFile('/private/tmp/seed1.csv', string, (err) => {
  if (err) console.log('Error: ', err);
  else {
    console.log('Data generated and appended');
  }
})