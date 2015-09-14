
// // The get-more-songs file should contain the AJAX call to your second JSON file with songs in it. 
// // This module should return the array of songs.




define(function () {
    return {
        getMore: function (callback) {
            $.ajax({
              url: './jsonFiles/more-songs2.json',
              dataType: "json"
            }).done(function(songs) {
              callback(songs);
            });
        }
    };
});

// ================ below is my code prior to seeing joe's example =========================



// define(["jquery"], function($) {

//     return {
//         getMoreSongs: function(songs2) {
//             // console.log("getMoreSongs happened");
//             $("#get-more-songs2").click(function() {
//                 $.ajax({
//                     url:"./jsonFiles/more-songs2.json"
//                 }).done(function(data) {
//                     songs2(data);
//                 });
//             });
//         }
//     };

// });




// attempt/option #3


// define(["jquery"], function($) {

//     return {
//         getMoreSongs: function(songs2) {
//             $(document).on("click", "#get-more-songs2", function() {
//                 $.ajax({
//                 url:".jsonFiles/more-songs2.json"
//                 }).done(function(songList){
//                     songs2(songList);
//                     console.log(songList.songs2);
//                 });    
//             });
//         }
//     }

// });



