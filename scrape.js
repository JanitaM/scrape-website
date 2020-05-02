const axios = require('axios')
const cheerio = require('cheerio')

async function fetchHTML(url) {
  try {
    // get html information
    const stations = await axios.get(url)
    // console.log(stations.data)
    const $ = cheerio.load(stations.data)

    // parent div has state name, example id='Alabama"
    // children div has id='a8739803'
    // div has a tag inside with id and city/location

    const divTags = $('#Alabama')
    const output = divTags.children('div').text();
    console.log(output)
  } catch (error) {
    console.log(error.message)
  }
}

fetchHTML('https://tidesandcurrents.noaa.gov/stations.html')
// fetchHTML('https://example.com/');