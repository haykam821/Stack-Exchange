const request = require("request");
const key = doc.stackExchangeKey;

var actualThings = function(topic, bot, doc, user, userID, channelID, message, event) {
  ///2.2/search/advanced?page=1&pagesize=1&order=desc&sort=relevance&q=INSERT TITLE HERE&accepted=True&site=stackoverflow
}

exports.onMessageReceived = (function StackExchange(bot, doc, user, userID, channelID, message, event) {
  require('./../exports.js').registerCmd(['sesearch <topic>', 'stacksearch <topic>'], 'Searches Stack Exchange for an answered question.');

  if (message === undefined) {
    return;
  }
  if (message.startsWith(doc.prefix + "sesearch ")) {
    var topic = message.replace(doc.prefix + "sesearch ", "");
    actualThings(topic, bot, doc, user, userID, channelID, message, event);
  }
  if (message.startsWith(doc.prefix + "sesearch ")) {
    var topic = message.replace(doc.prefix + "stacksearch ", "");
    actualThings(topic, bot, doc, user, userID, channelID, message, event);
  }
});
