var request = require('request');
var cheerio = require('cheerio');

var getNews = function(url, call) {
  
  if (url == "http://www.thescoreesports.com/home") {
    request(url, function(err, res, body) {
      var $ = cheerio.load(body);
      var articles = {};
      $('.NewsCard__bodyContainer--1h9Eb').each(function(i, element){
        var title = $(this).children(".NewsCard__title--37vMp").text();
        var summary = $(this).children(".NewsCard__content--1VLID").text();
        if (head !== "" && sum !== ""){
          var cleanTitle = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
          var cleanSummary = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
          articles[i] = [cleanTitle]; 
          articles[i].push(cleanSummary);
        }
      });
      console.log(articles); 
      call(articles);
    });
  }
};


module.exports = getNews;