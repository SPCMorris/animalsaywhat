const reqPromise = require('request-promise');
const cheerio = require('cheerio');

const getWikiData = (url) => {
  let transform = (body) => {
    return cheerio.load(body);
  };

  let options = {
    transform: transform,
    uri: url
  };

  reqPromise(options)
    .then( ($) => {
      
    })
    .catch( (error) => ( error ));
};

/*

 <table class="infobox biota"

<span class="family">

 <td colspan="2" style="text-align: center">
                                    <a href="/wiki/File:African_Bush_Elephant.jpg" class="image">

all <p>
<div id="toc" class="toc">

*/

const scrapWikiData = (page) => {
  if(!page) { return null }
  let summary, infobox;

  console.log('TESTING _--------', page)

  const formattedData = {
    summary,
    infobox
  };

  return formattedData;
}

const configAnimalData = (animal) => {
  const url = 'https://en.wikipedia.org/wiki/' + animal;
  // Get data from Wikipedia
  const wikiData = getWikiData(url);
  // Scrap data
  // const scrapedHtml = scrapWikiData(wikiData);
  // Check for audio sample in the DB

  return wikiData;
};

const wikiScrapper = {
  configAnimalData
};

module.exports = wikiScrapper;