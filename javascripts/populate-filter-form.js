define(function() {
  return {
    getSongs: function (filtCallback) {

    	$.ajax({
    	url: "https://musichistory.firebaseio.com/.json"
    	}).done(
    		function(firebaseData){
    			 console.log("getting albums and artists from Firebase for left filter: ", firebaseData);
          		filtCallback(firebaseData);

            });
        }
    };
});

// define(["jquery"], function($) {
//   return function(dataObj) {
//     console.log("Populate album list select");
    
//     });
//     console.log("Populate artist list select");
    
//     });
//   };
// });
