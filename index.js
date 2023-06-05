const { getRandomQuote } = require('randomquotesbyanton');

function randomCatsWithQuote() {
  const quote = getRandomQuote();
  
  return fetch('https://cataas.com/cat')
    .then(response => response.blob())
    .then(data => {
      const catUrl = URL.createObjectURL(data);
      return {
        quote: quote,
        catUrl: catUrl
      };
    })
    .catch(error => console.error(error));
}

module.exports = {
  randomCatsWithQuote
};
