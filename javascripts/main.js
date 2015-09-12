

// define(["jquery", "dom-access", "populate-songs", "get-more-songs"],
// 	function($, domAccess, getSongs, getMoreSongs) {
// 		$(document).ready(function() {
// 			function songOutput(songs) {
// 				console.log(songs);
// 				for (var i=0; i<songs.length; i++) {
// 					var playListOpts = songs.songs[i];
// 					var songDisplay = "<li>";
//                 	songDisplay += "<h2>" + currentSong.title + "</h2>";
//                	 	songDisplay += "<div>Performed by " + currentSong.artist +"</div>";
//                 	songDisplay += "<div>On the album " + currentSong.album + "</div>";
//                 	songDisplay += "<button id='delete'>Delete</button>";
//                 	songDisplay += "</li>";
//                 	$("#list-of-songs").append(songDisplay);
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


define(["jquery", "hbs", "populate-songs", "get-more-songs"],
  function($, Handlebars, popSongs, moreSongs) {

    var moreSongsLoaded = false;

    first.getSongs(function(songs){
      require(['hbs!../templates/songs'], function(songTemplate) {
        $(".song-list").html(songTemplate(songs));
      });
   });
 });



  //   $("#add_songs").one('click', function() {
  //     second.getSongs(function(songs){
  //       require(['hbs!../templates/songs'], function(songTemplate) {
  //       $("#song").append(songTemplate(songs));
  //     });
  //   });
  //   });

  //   $(document).on("click", ".button_delete", function() {
  //     $(this).closest("div").remove();
  //   });
  // }
// );

// =========================================









// define(["jquery", "dom-access", "populate-songs", "get-more-songs"],
// 	function($, domAccess, getSongs, getMoreSongs) {
// 		$(document).ready(function() {
// 			function songOutput(songs) {
// 				console.log(songs);
// 		// 	};
// 		// });	

//    		function songs(list) {
//         	for (var i = 0; i< list.songs.length; i++) {
//             	var currentSong = list.songs[i];
//             	$("#list-of-songs").append("<h1>"+ currentSong.title + "</h1>");
//            	 	$("#list-of-songs").append("<div> Performed by " + currentSong.artist + "</div>");
//             	$("#list-of-songs").append("<div> On the album " + currentSong.album + "</div>");
//             	$("#list-of-songs").append("<button> Delete this song </button>");
// 			};
//     	};
  
       
// 		function songs2(list) {
//         	for (var i = 0; i< list.songs2.length; i++) {
//             	var currentSong2 = list.songs2[i];
//             	$("#list-of-songs").append("<h1>"+ currentSong.title + "</h1>");
//             	$("#list-of-songs").append("<div> Performed by " + currentSong2.artist + "</div>");
//             	$("#list-of-songs").append("<div> On the album " + currentSong2.album + "</div>");
//             	$("#list-of-songs").append("<button> Delete this song</button>");
//         	};
//     	};

//  		populateSongs.getSongs(songOutput);

//         $(document).on("click", "#delete", function(){
//             $(this).parent().hide();
//         });
//         	getMoreSongs.getMoreSongs(songOutput);
		
// 		};

// 	});

//  });
