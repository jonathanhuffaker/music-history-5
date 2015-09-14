

define(["jquery", "hbs", "populate-songs"],
  function($, Handlebars, popSongs) {

    var moreSongsLoaded = false;

    popSongs.getSongs(function(songs){
      require(['hbs!../templates/songs'], function(songTemplate) {
        $(".song-list").html(songTemplate(songs));
      });
   });
 });

// ----------------


      // music hist 5 code before firebase


// define(["jquery", "hbs", "populate-songs", "get-more-songs"],
//   function($, Handlebars, popSongs, moreSongs) {

//     var moreSongsLoaded = false;

//     popSongs.getSongs(function(songs){
//       require(['hbs!../templates/songs'], function(songTemplate) {
//         $(".song-list").html(songTemplate(songs));
//       });
//    });
//  });