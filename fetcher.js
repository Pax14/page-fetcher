const fs = require('fs');
const request = require('request');

let website = process.argv[2];
let newFile = process.argv[3];

request(website, (error, response, body) => {

  if (error) {
    console.log('error:', error);
  }
  fs.writeFile(newFile, body, function(error)  {
    if (error) {
      console.log('error:', error);
    } else {
      console.log(`Downloaded and saved bytes to ${newFile}`);
    }
  });
});