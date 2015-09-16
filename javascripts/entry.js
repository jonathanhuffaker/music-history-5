





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
	["main", "lodash", "hbs", "bootstrap", "populate-songs", "populate-filter-form", "getUnique"], 
	
	function(main, _, Handlebars, bootstrap, popSongs, popFilterForm, unique) {
	// 	var moreSongsLoaded = false;
// ==============below is steve's code im adding in====

	// var allSongsObject = {};
 //    var allSongsArray = [];
 //    var originalSongsArray = [];

 //    // Create a reference to your Firebase database
 //    var myFirebaseRef = new Firebase("https://nss-demo-instructor.firebaseio.com");

 //    // Listen for when anything changes on the "songs" key
 //    myFirebaseRef.child("songs").on("value", function(snapshot) {

 //      // Store the entire songs key in a local variable
 //      var songs = snapshot.val();

 //      // Empty out the module-level song array
 //      allSongsArray = [];

 //      // Convert Firebase's object of objects into an array of objects
 //      for (var key in songs) {
 //        allSongsArray[allSongsArray.length] = songs[key];
 //      }
 //    }  
// ==============above is steve's code im adding in====

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

// below works (not unique and will display 2 "neil young's") but commenting out to try and get the unique artist to work
			// popFilterForm.getSongs(function(filteredArtists){
   //    			console.log("your popFilterSongs is working!")
   //    			require(["hbs!../templates/filteredArtists"], function(filterTemplate) {
   //      			$("#artist").append(filterTemplate(filteredArtists));
   //      		});
   //    		});

// this works and will populate album
  		popFilterForm.getSongs(function(filteredAlbums){
  			console.log("Also your popFilterSongs is working for albums!")
  			require(["hbs!../templates/filteredAlbums"], function(filterTemplate) {
    			$("#album").append(filterTemplate(filteredAlbums));
    		});
  		});


  		// below will be to populate unique artists
  		popFilterForm.getSongs(function(firebaseObject){
  			console.log("Unique artists should be working", firebaseObject)

  			var uniqueArtists = unique(firebaseObject.songs).uniqueArtists;
  			console.log("uniqueArtists", uniqueArtists);


  			require(["hbs!../templates/filteredArtists"], function(filterTemplate) {
    			$("#artist").append(filterTemplate({artists:uniqueArtists}));
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
