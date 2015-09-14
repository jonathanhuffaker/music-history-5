

// define(function () {
//     return {
//         makeSongList: function (songList = JSONObject.songs) {

//           for (var i = 0; i < songList.length; i ++) {
//             var $songListItem = $("<li/>", {class: "song-list__item"}),
//                 $title = $("<span/>", {class: "song-title"}).text(songList[i].title),
//                 $songListData = $("<ul/>", {class: "song-list__item--data"}),
//                 $songListDataItem = $("<li/>");

//             for ( var key in songList[i].info ) {
//               console.log(songList[i].info[key]);
//               $songListData.append("<li>" + songList[i].info[key] + "</li>");
//             }

//             $(".song-list").append($songListItem.append($title));
//             $(".song-list").append($songListItem.append($songListData));
//           }
//         }
//     };
// });













// define(["jquery"], function($) {
//   var outputSongs = $("#list-of-songs");

//   return outputSongs;
  
// });


// =================dom access will no longer be needed so am commenting out=====================
// define(function () {
//     return {
//         makeSongList: function (songList = JSONObject.songs) {

//           for (var i = 0; i < songList.length; i ++) {
//             var $songListItem = $("<li/>", {class: "song-list__item"}),
//                 $title = $("<span/>", {class: "song-title"}).text(songList[i].title),
//                 $songListData = $("<ul/>", {class: "song-list__item--data"}),
//                 $songListDataItem = $("<li/>");

//             for ( var key in songList[i].info ) {
//               console.log(songList[i].info[key]);
//               $songListData.append("<li>" + songList[i].info[key] + "</li>");
//             }

//             $(".song-list").append($songListItem.append($title));
//             $(".song-list").append($songListItem.append($songListData));
//           }
//         }
//     };
// });

// =========================================

