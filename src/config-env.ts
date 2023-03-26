const fs = require('fs');
require('dotenv').config();
const { argv } = require('yargs');
const environment = argv.environment;

let apiURL;
let targetPath;

if (environment === 'prod') {
  apiURL = process.env.API_KEY;
  targetPath = `./src/environments/environment.prod.ts`;
} else {
  apiURL = process.env.API_KEY;
  targetPath = `./src/environments/environment.ts`;
}

const envConfigFile = `
export const environment = {
    production: false,
    API_KEY: "${apiURL}",
    API_URL: "https://api.themoviedb.org/3"`;

fs.writeFile(targetPath, envConfigFile, (err: any) => {
  if (err) console.log(err);
});
