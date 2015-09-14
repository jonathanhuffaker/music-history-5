

// this is where i was at when i left class

define(["jquery", "hbs", "populate-songs", "get-more-songs"],
  function($, Handlebars, popSongs, moreSongs) {

    var moreSongsLoaded = false;

    popSongs.getSongs(function(songs){
      require(['hbs!../templates/songs'], function(songTemplate) {
        $(".song-list").html(songTemplate(songs));
      });
   });
 });


// ----------------

// ===================previous attempts/struggles below======================

// define(['jquery','populate-songs', 'get-more-songs', 'dom-access', 'bootstrap'], function ($, populate, getMoreSongs, dom) {

//     $('.dropdown-toggle').dropdown();

//     populate.getSongs(dom.makeSongList);

//     $(".add-more").one('click', function () {
//       getMoreSongs.getMore(dom.makeSongList);
//     });

// });





// define(["jquery", "dom-access", "populate-songs", "get-more-songs"],
//  function($, domAccess, getSongs, getMoreSongs) {
//    $(document).ready(function() {
//      function songOutput(songs) {
//        console.log(songs);
//        for (var i=0; i<songs.length; i++) {
//          var playListOpts = songs.songs[i];
//          var songDisplay = "<li>";
//                  songDisplay += "<h2>" + currentSong.title + "</h2>";
//                    songDisplay += "<div>Performed by " + currentSong.artist +"</div>";
//                  songDisplay += "<div>On the album " + currentSong.album + "</div>";
//                  songDisplay += "<button id='delete'>Delete</button>";
//                  songDisplay += "</li>";
//                  $("#list-of-songs").append(songDisplay);
//             }
//         }

//         getSongs.getSongs(songOutput);

//         $(document).on("click", "#delete", function(){
//             $(this).parent().hide();
//         });

//         getMoreSongs.getMoreSongs(songOutput);

//     });
// });


// ======================================
// define(['jquery','populate-songs', 'get-more-songs',  'bootstrap'], function ($, populate, getMoreSongs) {

//     $('.dropdown-toggle').dropdown();

//     populate.getSongs(dom.makeSongList);

//     $(".add-more").one('click', function () {
//       getMoreSongs.getMore(dom.makeSongList);
//     });

// });




// =========


// =========================



