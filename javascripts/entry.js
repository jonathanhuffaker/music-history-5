





requirejs.config({
	baseUrl: "./javascripts",
	paths: {
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		'lodash': '../bower_components/lodash/lodash.min',
		'firebase': '../bower_components/firebase/firebase',
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
	},
	shim : {
          "bootstrap" : ["jquery"],
          'firebase': {
            exports: 'Firebase'
    	     }
    	   }
});

require(
	["mainAdd","main", "lodash", "firebase", "hbs", "bootstrap", "populate-filter-form", "getUnique", "populate-songs"], 
	
	function(mainAdd, main, _, _firebase, Handlebars, bootstrap, popFilterForm, unique, popSongs) {
	// 	var moreSongsLoaded = false;


 // below will take you to add songs page
    $(".toAddSongs").click("click", function(){
        window.location.href="/song-form.html";
      });


// below will take you back to index from add songs page
    $("#test").click("click", function(){
        window.location.href="/index.html";
      });

		$(".dropdown-toggle").dropdown();
		
		$(".add-more").one('click', function () {
			console.log("hello");
			// console.log(moreSongs);


			popSongs.getSongs(function(songs) {
				console.log("songs", songs);
				require(["hbs!../templates/songs"], function(songTemplate) {
        			$(".song-list").append(songTemplate(songs));
        });
      });

		});



// =====below is steve's example that I made my own========

$(document).on("click", "a[id^='delete#']", function() {

      console.log(this.id, "https://musichistory.firebaseio.com/songs/" + this.id.split("#")[1] + ".json");

      $.ajax({
        url: "https://musichistory.firebaseio.com/songs/" + this.id.split("#")[1] + ".json",
        method: "DELETE",
        contentType: "application/json"
      }).done(function(song){
        console.log("Successfully deleted song");
      });
    })


// =====above is steve's example from projector screen========

//



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


    


