const faker = require('faker');

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

    for (let i = 0; i < 200000; i++) {
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

    for (let i = 200000; i < 400000; i++) {
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

    for (let i = 400000; i < 600000; i++) {
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

    for (let i = 600000; i < 800000; i++) {
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

    for (let i = 800000; i < 1000000; i++) {
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
  });
  // .then(() => {
  //   let items = [];

  //   for (let i = 2500000; i < 3000000; i++) {
  //     let item = {
  //       id: i,
  //       author: faker.name.findName(),
  //       authorphoto: faker.image.imageUrl(28, 28),
  //       title: faker.random.words(),
  //       bigphoto: faker.image.imageUrl(600, 400),
  //       smallphoto: faker.image.imageUrl(200, 150),
  //       newsfeed: faker.lorem.paragraph(),
  //       videoclip: getUrl(),
  //     };
  //     items.push(item);
  //   }
  //   console.log('Inserting batch');
  //   return knex.batchInsert('feeds', items, 1000);
  // })
  // .then(() => {
  //   let items = [];

  //   for (let i = 3000000; i < 3500000; i++) {
  //     let item = {
  //       id: i,
  //       author: faker.name.findName(),
  //       authorphoto: faker.image.imageUrl(28, 28),
  //       title: faker.random.words(),
  //       bigphoto: faker.image.imageUrl(600, 400),
  //       smallphoto: faker.image.imageUrl(200, 150),
  //       newsfeed: faker.lorem.paragraph(),
  //       videoclip: getUrl(),
  //     };
  //     items.push(item);
  //   }
  //   console.log('Inserting batch');
  //   return knex.batchInsert('feeds', items, 1000);
  // })
  // .then(() => {
  //   let items = [];

  //   for (let i = 3500000; i < 4000000; i++) {
  //     let item = {
  //       id: i,
  //       author: faker.name.findName(),
  //       authorphoto: faker.image.imageUrl(28, 28),
  //       title: faker.random.words(),
  //       bigphoto: faker.image.imageUrl(600, 400),
  //       smallphoto: faker.image.imageUrl(200, 150),
  //       newsfeed: faker.lorem.paragraph(),
  //       videoclip: getUrl(),
  //     };
  //     items.push(item);
  //   }
  //   console.log('Inserting batch');
  //   return knex.batchInsert('feeds', items, 1000);
  // })
  // .then(() => {
  //   let items = [];

  //   for (let i = 4000000; i < 4500000; i++) {
  //     let item = {
  //       id: i,
  //       author: faker.name.findName(),
  //       authorphoto: faker.image.imageUrl(28, 28),
  //       title: faker.random.words(),
  //       bigphoto: faker.image.imageUrl(600, 400),
  //       smallphoto: faker.image.imageUrl(200, 150),
  //       newsfeed: faker.lorem.paragraph(),
  //       videoclip: getUrl(),
  //     };
  //     items.push(item);
  //   }
  //   console.log('Inserting batch');
  //   return knex.batchInsert('feeds', items, 1000);
  // })
  // .then(() => {
  //   let items = [];

  //   for (let i = 4500000; i < 5000000; i++) {
  //     let item = {
  //       id: i,
  //       author: faker.name.findName(),
  //       authorphoto: faker.image.imageUrl(28, 28),
  //       title: faker.random.words(),
  //       bigphoto: faker.image.imageUrl(600, 400),
  //       smallphoto: faker.image.imageUrl(200, 150),
  //       newsfeed: faker.lorem.paragraph(),
  //       videoclip: getUrl(),
  //     };
  //     items.push(item);
  //   }
  //   console.log('Inserting batch');
  //   return knex.batchInsert('feeds', items, 1000);
  // })
  // .then(() => {
  //   let items = [];

  //   for (let i = 5000000; i < 5500000; i++) {
  //     let item = {
  //       id: i,
  //       author: faker.name.findName(),
  //       authorphoto: faker.image.imageUrl(28, 28),
  //       title: faker.random.words(),
  //       bigphoto: faker.image.imageUrl(600, 400),
  //       smallphoto: faker.image.imageUrl(200, 150),
  //       newsfeed: faker.lorem.paragraph(),
  //       videoclip: getUrl(),
  //     };
  //     items.push(item);
  //   }
  //   console.log('Inserting batch');
  //   return knex.batchInsert('feeds', items, 1000);
  // })
  // .then(() => {
  //   let items = [];

  //   for (let i = 5500000; i < 6000000; i++) {
  //     let item = {
  //       id: i,
  //       author: faker.name.findName(),
  //       authorphoto: faker.image.imageUrl(28, 28),
  //       title: faker.random.words(),
  //       bigphoto: faker.image.imageUrl(600, 400),
  //       smallphoto: faker.image.imageUrl(200, 150),
  //       newsfeed: faker.lorem.paragraph(),
  //       videoclip: getUrl(),
  //     };
  //     items.push(item);
  //   }
  //   console.log('Inserting batch');
  //   return knex.batchInsert('feeds', items, 1000);
  // })
  // .then(() => {
  //   let items = [];

  //   for (let i = 6000000; i < 6500000; i++) {
  //     let item = {
  //       id: i,
  //       author: faker.name.findName(),
  //       authorphoto: faker.image.imageUrl(28, 28),
  //       title: faker.random.words(),
  //       bigphoto: faker.image.imageUrl(600, 400),
  //       smallphoto: faker.image.imageUrl(200, 150),
  //       newsfeed: faker.lorem.paragraph(),
  //       videoclip: getUrl(),
  //     };
  //     items.push(item);
  //   }
  //   console.log('Inserting batch');
  //   return knex.batchInsert('feeds', items, 1000);
  // })
  // .then(() => {
  //   let items = [];

  //   for (let i = 6500000; i < 7000000; i++) {
  //     let item = {
  //       id: i,
  //       author: faker.name.findName(),
  //       authorphoto: faker.image.imageUrl(28, 28),
  //       title: faker.random.words(),
  //       bigphoto: faker.image.imageUrl(600, 400),
  //       smallphoto: faker.image.imageUrl(200, 150),
  //       newsfeed: faker.lorem.paragraph(),
  //       videoclip: getUrl(),
  //     };
  //     items.push(item);
  //   }
  //   console.log('Inserting batch');
  //   return knex.batchInsert('feeds', items, 1000);
  // })
  // .then(() => {
  //   let items = [];

  //   for (let i = 7000000; i < 7500000; i++) {
  //     let item = {
  //       id: i,
  //       author: faker.name.findName(),
  //       authorphoto: faker.image.imageUrl(28, 28),
  //       title: faker.random.words(),
  //       bigphoto: faker.image.imageUrl(600, 400),
  //       smallphoto: faker.image.imageUrl(200, 150),
  //       newsfeed: faker.lorem.paragraph(),
  //       videoclip: getUrl(),
  //     };
  //     items.push(item);
  //   }
  //   console.log('Inserting batch');
  //   return knex.batchInsert('feeds', items, 1000);
  // })
  // .then(() => {
  //   let items = [];

  //   for (let i = 7500000; i < 8000000; i++) {
  //     let item = {
  //       id: i,
  //       author: faker.name.findName(),
  //       authorphoto: faker.image.imageUrl(28, 28),
  //       title: faker.random.words(),
  //       bigphoto: faker.image.imageUrl(600, 400),
  //       smallphoto: faker.image.imageUrl(200, 150),
  //       newsfeed: faker.lorem.paragraph(),
  //       videoclip: getUrl(),
  //     };
  //     items.push(item);
  //   }
  //   console.log('Inserting batch');
  //   return knex.batchInsert('feeds', items, 1000);
  // })
  // .then(() => {
  //   let items = [];

  //   for (let i = 8000000; i < 8500000; i++) {
  //     let item = {
  //       id: i,
  //       author: faker.name.findName(),
  //       authorphoto: faker.image.imageUrl(28, 28),
  //       title: faker.random.words(),
  //       bigphoto: faker.image.imageUrl(600, 400),
  //       smallphoto: faker.image.imageUrl(200, 150),
  //       newsfeed: faker.lorem.paragraph(),
  //       videoclip: getUrl(),
  //     };
  //     items.push(item);
  //   }
  //   console.log('Inserting batch');
  //   return knex.batchInsert('feeds', items, 1000);
  // })
  // .then(() => {
  //   let items = [];

  //   for (let i = 8500000; i < 9000000; i++) {
  //     let item = {
  //       id: i,
  //       author: faker.name.findName(),
  //       authorphoto: faker.image.imageUrl(28, 28),
  //       title: faker.random.words(),
  //       bigphoto: faker.image.imageUrl(600, 400),
  //       smallphoto: faker.image.imageUrl(200, 150),
  //       newsfeed: faker.lorem.paragraph(),
  //       videoclip: getUrl(),
  //     };
  //     items.push(item);
  //   }
  //   console.log('Inserting batch');
  //   return knex.batchInsert('feeds', items, 1000);
  // })
  // .then(() => {
  //   let items = [];

  //   for (let i = 9000000; i < 9500000; i++) {
  //     let item = {
  //       id: i,
  //       author: faker.name.findName(),
  //       authorphoto: faker.image.imageUrl(28, 28),
  //       title: faker.random.words(),
  //       bigphoto: faker.image.imageUrl(600, 400),
  //       smallphoto: faker.image.imageUrl(200, 150),
  //       newsfeed: faker.lorem.paragraph(),
  //       videoclip: getUrl(),
  //     };
  //     items.push(item);
  //   }
  //   console.log('Inserting second to last batch');
  //   return knex.batchInsert('feeds', items, 1000);
  // })
  // .then(() => {
  //   let items = [];

  //   for (let i = 9500000; i < 10000000; i++) {
  //     let item = {
  //       id: i,
  //       author: faker.name.findName(),
  //       authorphoto: faker.image.imageUrl(28, 28),
  //       title: faker.random.words(),
  //       bigphoto: faker.image.imageUrl(600, 400),
  //       smallphoto: faker.image.imageUrl(200, 150),
  //       newsfeed: faker.lorem.paragraph(),
  //       videoclip: getUrl(),
  //     };
  //     items.push(item);
  //   }
  //   console.log('Inserting final batch');
  //   return knex.batchInsert('feeds', items, 1000);
  // })
  // .then(() => console.log('Finished Inserting!'))