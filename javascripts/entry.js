





requirejs.config({
	baseUrl: "./javascripts",
	paths: {
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
	},
	shim : {
        "bootstrap" : ["jquery"]
    }
});

require(
	["main", "hbs", "bootstrap", "populate-songs"], 
	
	function(main, Handlebars, bootstrap, popSongs) {
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
