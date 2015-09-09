// The populate-songs file should contain the AJAX call to your first JSON file with songs in it. 
// This module should return the array of songs.
// 
// 
// ---------Below is my code taken from my last music history -------------

// define(["jquery"], function($) {
//     $(document).ready(function() {
//         $(document).on("click", "#get-more-songs", function() {
//             $.ajax({
//                 url:".jsonFiles/more-songs.json"
//             }).done(function(songList){
//                 songs(songList);
//                 console.log(songList.songs);
//             });
//         }); 
//     });   


//     function songs(list) {
//         for (var i = 0; i< list.songs.length;i++) {
//             var currentSong = list.songs[i];
//             $("#list-of-songs").append("<h1>"+ currentSong.title + "</h1>");
//             $("#list-of-songs").append("<div> Performed by " + currentSong.artist + "</div>");
//             $("#list-of-songs").append("<div> On the album " + currentSong.album + "</div>");
//             $("#list-of-songs").append("<button> Delete this song </button>");
//         };
//     };
// });

// ---------^^^^^^Above is my code taken from my last music history^^^^^^ -------------




define(["jquery"], function($) {

    return {
        getSongs: function(whateverCallback) {
            // console.log("get songs called");
            $.ajax({
                url:"./jsonFiles/more-songs.json"
            }).done(function(data) {
                whateverCallback(data);
            });
        }
    };

});