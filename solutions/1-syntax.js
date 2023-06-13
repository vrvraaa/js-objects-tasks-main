const fetch = require('node-fetch'); 

async function getJsonData() {
  const response = await fetch('/data/example.json');
  const data = await response.json();
  return data;
}