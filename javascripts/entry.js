





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
	["main", "hbs", "bootstrap", "populate-songs", "get-more-songs"], 
	
	function(main, Handlebars, bootstrap, popSongs, moreSongs) {
	// 	var moreSongsLoaded = false;

		$(".dropdown-toggle").dropdown();
		
		$(".add-more").on('click', function () {
			console.log("hello");
			// console.log(moreSongs);
		moreSongs.getMore(function(songs) {
			console.log("songs", songs);
			require(["hbs!../templates/songs"], function(songTemplate) {
        		$(".song-list").append(songTemplate(songs));
        	});
      	});
	});
    }
);





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

// =================================	
// here is another try

// requirejs(['main']);

// require.config({
//     shim : {
//         "bootstrap" : { "deps" :['jquery'] }
//     },
//     paths: {
//       'jquery': '../bower_components/jquery/dist/jquery.min',
//       'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
//     }
// });


// requirejs.config({
// 		baseUrl: "./javascripts",
// 	paths: {
// 		"jquery": "../bower_components/jquery/dist/jquery.min"
// 	}

// });


// require(["main"], function() {
	
// });
    

    
 