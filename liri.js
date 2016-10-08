var keykeys = require('./keys.js');
var twitter = require('twitter');
var client = new twitter(keykeys.twitterKeys);
var spotify = require('spotify');
var request = require('request');
var fs = require('fs'); 

var command = process.argv[2];
var proArg = process.argv;
var title = "";

for (var i = 3; i < proArg.length; i++) {
  if(i>3 && i<proArg.length){

    title = title + "+" + proArg[i];
  }
  else{
    title = title + proArg[i];
  }
}

console.log(title);
switch(command){
  case "my-tweets":
  mytweets();
  break;
  
  case "spotify-this-song":
  goSpotify();
  break;

  case "movie-this":
  movie();
  break;

  case "do-what-it-says":
  dodo();
  break;

  default:
  console.log("enter command: my-tweets, spotify-this-song, movie-this, do-what-it-says");
}

function mytweets(){
  var params = {screen_name: '3Fk7Y0j3XuzqtCG'};
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      for(var i = 0; i<tweets.length; i++){
        console.log("@KevinDing:" + tweets[i].text);
        console.log("---------------");
      }
    } 
  })
}

function goSpotify(){
  if (title == ""){
    title = "The Sign";
  }
  spotify.search({type: 'track', query: title}, function(err, data){
    if (!err){
      for (var i = 0; i<data.tracks.items.length; i++){
      var song = data.tracks.items[i];
      console.log(song.artists[0].name);
      console.log(song.name);
      console.log(song.preview_url);
      console.log(song.album.name);
      console.log("---------------");
      }
    }
  })
}

function movie(){
 
}

function dodo(){

}