
// The get-more-songs file should contain the AJAX call to your second JSON file with songs in it. 
// This module should return the array of songs.

define([], function() {
    var songlist2 = [

        $(document).on("click", "#get-more-songs2", function() {
        $.ajax({
        url:"./more-songs2.json"
    }).done(function(songList){
        songs2(songList);
    console.log(songList.songs2);
            });
        })


function songs2(list) {
    for (var i = 0; i< list.songs2.length;i++) {
            var currentSong = list.songs2[i];
            $("#list-of-songs").append("<h1>"+ currentSong.title + "</h1>");
            $("#list-of-songs").append("<div> Performed by " + currentSong.artist + "</div>");
            $("#list-of-songs").append("<div> On the album " + currentSong.album + "</div>");
            $("#list-of-songs").append("<button> Delete this song</button>");
        };
};
    

    ]
};

return {
        getMoreSongs: function(songlist2) {
            return songlist2[get-more-songs];
        }
    };
    
});