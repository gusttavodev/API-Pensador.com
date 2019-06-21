// Scraping da pagina https://www.pensador.com
const cheerio = require('cheerio');
const axios = require('axios');

// Retorna o html  do link do parametro
async function getHtml(html) {
    let res = await axios.get(html);
    const data = res.data;
   
    return data;
}
// Traz um array com as frases
function getFrases($) {
    // Array que vai receber as frases
    const frases = [];    

    $('p').each(function(i, elem) {
        frases[i] = $(this).text();
      });
  
    return frases
}

 // Função que faz o scraping
async function scrapingData() {
    // Traz o Html
    const data = await getHtml(`https://www.pensador.com/ocultismo/`);
    const $ = cheerio.load(data); 
  
    // Traz o array de frases
    const arrFrases = getFrases($); 
    arrFrases.forEach(element => {
        console.log('Frase:', element);
    });
    return arrFrases;
}

scrapingData();

