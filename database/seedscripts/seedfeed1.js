const fs = require('fs');

const data = 'id,author,authorphoto,bigphoto,newsfeed,smallphoto,timestamp,title,videoclip' + '\n';


fs.writeFile(`/private/tmp/seed1.csv`, data, (err) => {
  if (err) console.log('Error: ', err);
  else {
    console.log('Seedfile has been created');
  }
});