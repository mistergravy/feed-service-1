const faker = require('faker');

const ramsFeed = [{
  id: 1,
  author: 'Lindsey Thiry',
  authorphoto: 'https://d152i52xn388ub.cloudfront.net/football/los-angeles-rams-reporter/lindsey-thiry_normal.jpg',
  title: 'Savannah Smiles',
  bigphoto: 'https://s3.us-east-2.amazonaws.com/espn-feed-photos/espn+images/lg5.jpg',
  smallphoto: 'https://s3.us-east-2.amazonaws.com/espn-feed-photos/espn+images/sm5.jpg',
  newsfeed: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Decode this secret message. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Decode this secret message. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Meow',
  videoclip: 'https://www.youtube.com/embed/mYXu1xeiYKA',
}];


const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max - 0 + 1)) + 0;
};

const getUrl = () => {
  let urls = ['https://www.youtube.com/embed/zhuIU4wKAGw',  'https://www.youtube.com/embed/Mfi5NqBTj-Q', 'https://www.youtube.com/embed/w5mtQwDiXfw', 'https://www.youtube.com/embed/nKLkj0FzoEo', 'https://www.youtube.com/embed/_nCuFICMfMw'];

  return urls[getRandomInt(urls.length - 1)];
};


exports.seed = (knex, Promise) => knex('feeds').del()
  .then(() => {
    let items = [];

    for (let i = 0; i < 500000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);

  })
  .then(() => {
    let items = [];

    for (let i = 500000; i < 1000000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 1000000; i < 1500000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 1500000; i < 2000000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 2000000; i < 2500000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 2500000; i < 3000000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 3000000; i < 3500000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 3500000; i < 4000000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 4000000; i < 4500000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 4500000; i < 5000000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 5000000; i < 5500000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 5500000; i < 6000000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 6000000; i < 6500000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 6500000; i < 7000000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 7000000; i < 7500000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 7500000; i < 8000000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 8000000; i < 8500000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 8500000; i < 9000000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 9000000; i < 9500000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting second to last batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => {
    let items = [];

    for (let i = 9500000; i < 10000000; i++) {
      let item = {
        id: i,
        author: faker.name.findName(),
        authorphoto: faker.image.imageUrl(28, 28),
        title: faker.random.words(),
        bigphoto: faker.image.imageUrl(600, 400),
        smallphoto: faker.image.imageUrl(200, 150),
        newsfeed: faker.lorem.paragraph(),
        videoclip: getUrl(),
      };
      items.push(item);
    }
    console.log('Inserting final batch');
    return knex.batchInsert('feeds', items, 1000);
  })
  .then(() => console.log('Finished Inserting!'))