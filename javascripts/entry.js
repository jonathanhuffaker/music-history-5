





requirejs.config({
	baseUrl: "./javascripts",
	paths: {
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		'lodash': '../bower_components/lodash/lodash.min',
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
	},
	shim : {
        "bootstrap" : ["jquery"]
    }
});

require(
	["main", "lodash", "hbs", "bootstrap", "populate-songs", "populate-filter-form"], 
	
	function(main, _, Handlebars, bootstrap, popSongs, popFilterForm) {
	// 	var moreSongsLoaded = false;

		$(".dropdown-toggle").dropdown();
		
		$(".add-more").on('click', function () {
			console.log("hello");
			// console.log(moreSongs);


			popSongs.getSongs(function(songs) {
				console.log("songs", songs);
				require(["hbs!../templates/songs"], function(songTemplate) {
        			$(".song-list").append(songTemplate(songs));
        		});
      		});

		});


			popFilterForm.getSongs(function(filteredArtists){
      			console.log("your popFilterSongs is working!")
      			require(["hbs!../templates/filteredArtists"], function(filterTemplate) {
        			$("#artist").append(filterTemplate(filteredArtists));
        		});
      		});


      		popFilterForm.getSongs(function(filteredAlbums){
      			console.log("Also your popFilterSongs is working for albums!")
      			require(["hbs!../templates/filteredAlbums"], function(filterTemplate) {
        			$("#album").append(filterTemplate(filteredAlbums));
        		});
      		});
    }
);





// ================= music hist 5 code before firebase ===========================


// requirejs.config({
// 	baseUrl: "./javascripts",
// 	paths: {
// 		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
// 		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
// 		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
// 	},
// 	shim : {
//         "bootstrap" : ["jquery"]
//     }
// });

// require(
// 	["main", "hbs", "bootstrap", "populate-songs", "get-more-songs"], 
	
// 	function(main, Handlebars, bootstrap, popSongs, moreSongs) {
// 	// 	var moreSongsLoaded = false;

// 		$(".dropdown-toggle").dropdown();
		
// 		$(".add-more").on('click', function () {
// 			console.log("hello");
// 			// console.log(moreSongs);
// 		moreSongs.getMore(function(songs) {
// 			console.log("songs", songs);
// 			require(["hbs!../templates/songs"], function(songTemplate) {
//         		$(".song-list").append(songTemplate(songs));
//         	});
//       	});
// 	});
//     }
// );
