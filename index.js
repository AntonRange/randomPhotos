import { fetchQuotes } from 'randomquotesbyanton';

function randomCatsWithQuote() {
  return Promise.all([fetchQuotes(), fetch('https://cataas.com/cat')])
    .then(([quotes, response]) => Promise.all([quotes, response.blob()]))
    .then(([quotes, data]) => {
      const catUrl = URL.createObjectURL(data);
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      return {
        quote: randomQuote.text,
        author: randomQuote.author,
        catUrl: catUrl
      };
    })
    .catch(error => console.error(error));
}

export { randomCatsWithQuote };
