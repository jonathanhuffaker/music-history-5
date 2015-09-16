// The populate-songs file should contain the AJAX call to your first JSON file with songs in it. 
// This module should return the array of songs.



// ============================================
define(function () {
    return {
        getSongs: function (theCallback) {

          $.ajax({
           url: "https://musichistory.firebaseio.com/.json"
          }).done(
            function(firebaseData) {
              // Execute the callback function that was sent to me
              console.log("songs array from Firebase: ", firebaseData);
              theCallback(firebaseData);
      
            });
        }
    };
});


// ==============Steve's example from slack====================
//           $.ajax({
//         url: "https://nss-demo-instructor.firebaseio.com/.json"
//       }).done(
//         function(firebaseData) {
//           // Execute the callback function that was sent to me
//           console.log("songs array from Firebase: ", firebaseData);
//           fnRefFromMainJS(firebaseData);
//  
//             });
//         }
//     };
// });
// ==================================



      // music hist 5 code before firebase
// 
// below is working but didnt want to delete since 
// I am still new with firebase and want to keep for reference purposes

// define(function () {
//     return {
//         getSongs: function (theCallback) {
//             $.ajax({
//               url: "./jsonFiles/more-songs.json",
//               dataType: "json"
//             }).done(function(JSONObject) {
//               theCallback(JSONObject);

//             });
//         }
//     };
// });








// ============================================