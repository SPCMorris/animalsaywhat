const reqPromise = require('request-promise');
const cheerio = require('cheerio');

const getWikiData = (url) => {
  return reqPromise(url)
    .then( (response) => {
      return response;
    })
    .catch( (err) => {
      return err;
    })
};

/*

 <table class="infobox biota"

<span class="family">

 <td colspan="2" style="text-align: center">
                                    <a href="/wiki/File:African_Bush_Elephant.jpg" class="image">

all <p>
<div id="toc" class="toc">

*/

const scrapWikiData = () => {

}

const configAnimalData = (animal) => {
  const url = 'https://en.wikipedia.org/wiki/' + animal;
  // Get data from Wikipedia
  const wikiData = getWikiData(url)
  // Scrap data

  // Check for audio sample
  
  return wikiData;
};

const wikiScrapper = {
  configAnimalData
};

module.exports = wikiScrapper;