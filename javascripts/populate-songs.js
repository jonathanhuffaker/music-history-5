// The populate-songs file should contain the AJAX call to your first JSON file with songs in it. 
// This module should return the array of songs.
define([], function() {
    var songlist1 = [

        $(document).on("click", "#get-more-songs", function() {
            $.ajax({
            url:"./more-songs.json"
        }).done(function(songList){
            songs(songList);
            console.log(songList.songs);
            });
        })
    ]
    });
function songs(list) {
    for (var i = 0; i< list.songs.length;i++) {
            var currentSong = list.songs[i];
            $("#list-of-songs").append("<h1>"+ currentSong.title + "</h1>");
            $("#list-of-songs").append("<div> Performed by " + currentSong.artist + "</div>");
            $("#list-of-songs").append("<div> On the album " + currentSong.album + "</div>");
            $("#list-of-songs").append("<button> Delete this song</button>");
        };
        $()
};

return {
        getSongs: function(songlist1) {
            return songlist1[populate-songs];
        }
    };
    
});