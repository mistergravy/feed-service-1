const faker = require('faker');

const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max - 0 + 1)) + 0;
};

const getUrl = () => {
  let urls = ['https://www.youtube.com/embed/zhuIU4wKAGw',  'https://www.youtube.com/embed/Mfi5NqBTj-Q', 'https://www.youtube.com/embed/w5mtQwDiXfw', 'https://www.youtube.com/embed/nKLkj0FzoEo', 'https://www.youtube.com/embed/_nCuFICMfMw'];

  return urls[getRandomInt(urls.length - 1)];
};


const generateData = (numRecs) => {
  const records = [];

  for (let i = 0; i < numRecs; i++) {
    let item = {
      author: 'jared horne',
      authorphoto: 'https://picsum.photos/28/28',
      title: faker.random.words(),
      bigphoto: 'https://picsum.photos/600/400',
      smallphoto: 'https://picsum.photos/200/150',
      newsfeed: faker.lorem.paragraph(),
      videoclip: getUrl()
    };
    records.push(item);
  }
  return records;
};

let set = generateData(100000);

const startTime = new Date().getTime();

exports.seed = knex => knex.batchInsert('feeds', set, 1000)
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 1 mil
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 2 mil
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 3 mil
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 4 mil
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 5 mil
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 6 mill
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 7 mil
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 8 mil
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 9 mil
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000))
  .then(() => knex.batchInsert('feeds', set, 1000)) // 10 mil
  .then(() => console.log('10m insertions took ', new Date().getTime() - startTime, 'ms'))


// exports.seed = (knex, Promise) => knex('feeds').del()
//   .then(() => {
//     let items = [];

//     for (let i = 0; i < 200000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 200000; i < 400000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 400000; i < 600000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 600000; i < 800000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 800000; i < 1000000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 1000000; i < 1200000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 1200000; i < 1400000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 1400000; i < 1600000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 1600000; i < 1800000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 1800000; i < 2000000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 2000000; i < 2200000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 2200000; i < 2400000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 2400000; i < 2600000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 2600000; i < 2800000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 2800000; i < 3000000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 3000000; i < 3200000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 3200000; i < 3400000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 3400000; i < 3600000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 3600000; i < 3800000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting second to last batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 3800000; i < 4000000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 4000000; i < 4200000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 4200000; i < 4400000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 4400000; i < 4600000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 4600000; i < 4800000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 4800000; i < 5000000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 5000000; i < 5200000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 5200000; i < 5400000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 5400000; i < 5600000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 5600000; i < 5800000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 5800000; i < 6000000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 6000000; i < 6200000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 6200000; i < 6400000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 6400000; i < 6600000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 6600000; i < 6800000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 6800000; i < 7000000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 7000000; i < 7200000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 7200000; i < 7400000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 7400000; i < 7600000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 7600000; i < 7800000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 7800000; i < 8000000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 8000000; i < 8200000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 8200000; i < 8400000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 8400000; i < 8600000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 8600000; i < 8800000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 8800000; i < 9000000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 9000000; i < 9200000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 9200000; i < 9400000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 9400000; i < 9600000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 9600000; i < 9800000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => {
//     let items = [];

//     for (let i = 9800000; i < 10000000; i++) {
//       let item = {
//         id: i,
//         author: 'jared horne',
//         authorphoto: 'https://picsum.photos/28/28',
//         title: faker.random.words(),
//         bigphoto: 'https://picsum.photos/600/400',
//         smallphoto: 'https://picsum.photos/200/150',
//         newsfeed: faker.lorem.paragraph(),
//         videoclip: getUrl(),
//       };
//       items.push(item);
//     }
//     console.log('Inserting final batch');
//     return knex.batchInsert('feeds', items, 1000);
//   })
//   .then(() => console.log('Finished Inserting!'))