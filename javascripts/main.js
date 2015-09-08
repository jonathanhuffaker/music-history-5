

define(["jquery", "dom-access", "populate-songs", "get-more-songs"],
	function($, domAccess, getSongs, getMoreSongs) {
		var playListOpts;
		var playListModule = {
			domAccess: domAccess,
			getSongs: getSongs,
			getMoreSongs: getMoreSongs,
		};
	});





define(["jquery", "dom-access", "get-songs", "get-more-songs"],
function($, domAccess, getSongs, getMoreSongs) {
    $(document).ready(function() {
        function songCallback(whateverName) {
            console.log(whateverName);
            for (var i = 0; i < whateverName.songs.length; i++) {
                var currentSong = whateverName.songs[i];
                var songDisplay = "<li>";
                songDisplay += "<h2>" + currentSong.title + "</h2>";
                songDisplay += "<div>Performed by " + currentSong.artist +"</div>";
                songDisplay += "<div>On the album " + currentSong.album + "</div>";
                songDisplay += "<button id='delete'>Delete</button>";
                songDisplay += "</li>";
                $("#song-list").append(songDisplay);
            }
        }

        getSongs.getSongs(songCallback);

        // $.ajax({
        //     url:"./javascripts/songs.json"
        // }).done(songCallback);

        $(document).on("click", "#delete", function(){
            $(this).parent().hide();
        });

        $("#add-song").click(function(){
            $.ajax({
                url:"./javascripts/moreSongs.json"
            }).done(songCallback);
        });
    });
});