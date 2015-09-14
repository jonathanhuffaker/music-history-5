// The populate-songs file should contain the AJAX call to your first JSON file with songs in it. 
// This module should return the array of songs.
// 
// 
// 
define(function () {
    return {
        getSongs: function (theCallback) {
            $.ajax({
              url: "./jsonFiles/more-songs.json",
              dataType: "json"
            }).done(function(JSONObject) {
              theCallback(JSONObject);

            });
        }
    };
});








// ============================================
// / =========previous attempts/examples
// // this is where i was at when i left class


// define(function () {
//     return {
//         getSongs: function (callback = dom.makeSongList) {
//             $.ajax({
//               url: ".jsonFiles/more-songs.json",
//               dataType: "json",
//             }).done(function(JSONObject) {
//               dom.makeSongList(JSONObject.songs);
//             });
//         }
//     };
// });



// ==========================


// define(["jquery"], function($) {

//     return {
//         getSongs: function(whateverCallback) {
//             // console.log("get songs called");
//             $.ajax({
//                 url:"./jsonFiles/more-songs.json"
//             }).done(function(data) {
//                 whateverCallback(data);
//             });
//         }
//     };

// });


