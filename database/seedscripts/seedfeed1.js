const faker = require('faker');
const fs = require('fs');

const data = [];

const insert = () => {
for (let i = 0; i < 1000000; i++) {
  const fakeData = `${i}, ${faker.name.findName()}, ${faker.image.imageUrl()}, ${faker.image.imageUrl()}, ${faker.lorem.paragraph()}, ${faker.image.imageUrl()}, 'astringbooya', ${faker.random.word()}, ${faker.image.imageUrl()}` + '\n';
  data.push([fakeData]);
}
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