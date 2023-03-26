const fs = require('fs');
require('dotenv').config();
const { argv } = require('yargs');
const environment = argv.environment;
console.log('Environment: ', environment);


let apiURL;
let targetPath;

if (environment === 'prod') {
  apiURL = process.env.API_KEY;
  console.log('API_KEY: ', apiURL);

  targetPath = `./src/environments/environment.prod.ts`;
} else {
  apiURL = process.env.API_KEY;
  console.log('API_KEY Dev: ', apiURL);

  targetPath = `./src/environments/environment.ts`;
}

const envConfigFile = `
export const environment = {
    production: true,
    API_KEY: "${apiURL}",
    API_URL: "https://api.themoviedb.org/3"
}`;
console.log({envConfigFile});

fs.writeFile(targetPath, envConfigFile, (err: any) => {
  if (err) console.log(err);
});
