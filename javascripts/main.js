

define(["jquery", "hbs", "populate-songs"],
  function($, Handlebars, popSongs) {

    var moreSongsLoaded = false;

    popSongs.getSongs(function(songs){
      require(['hbs!../templates/songs'], function(songTemplate) {
        $(".song-list").html(songTemplate(songs));
      });
   });





 });

