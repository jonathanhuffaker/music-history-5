// requirejs.config({
// 		baseUrl: "./javascripts",
// 	paths: {
// 		"jquery": "../bower_components/jquery/dist/jquery.min"
// 	}

// });


// require(["main"], function() {
	
// });

// ================= Joe"s code below ===========================

// requirejs(["app"]);

// require.config({
//     shim : {
//         "bootstrap" : { "deps" :["jquery"] }
//     },
//     paths: {
//       "jquery": "../bower_components/jquery/dist/jquery.min",
//       "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap.min"
//     }
// });
// ================ Joe"s example above =========================



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
	["main", "hbs", "bootstap", "populate-songs", "get-more-songs"], 
	
	function(main, Handlebars, bootstrap, popSongs, moreSongs) {
	// 	var moreSongsLoaded = false;

	// 	$(".dropdown-toggle").dropdown();
	// 	popSongs.getSongs(dom.makeSongList);
	// 	$(".add-more").on('click', function () {
	// 		console.log("hello");
	// 	moreSongs.moreSongs(function(songs) {
	// 		console.log("songs", songs);
	// 		require(["hbs!../templates/songs"], function(songTemplate) {
 //        		$(".song-list").html(songTemplate(songs));
 //        	});
 //      	});
	// });
    }
);
	

    

    
 