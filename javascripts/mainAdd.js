define(["mainAdd","main","jquery", "hbs", "lodash", "firebase", "bootstrap", "populate-filter-form", "getUnique"], 
  function(mainAdd, main, $, handlebars, _, firebase, bootstrap, popFilterForm, unique) {

  $("#addSong").click(function(e) {
    var newSong = {
      "title": $("#songName").val(),
      "artist": $("#artistName").val(),
      "album": $("#albumName").val()
      // "genre": $("#newGenre").val(),
      
    };

   console.log("New Song", newSong);
   $.ajax({
      url: "https://musichistory.firebaseio.com/songs/.json",
      method: "POST",
      data: JSON.stringify(newSong)
    }).done(function(addedSong) {
      console.log("Your new song is ", addedSong);
    });
   });



});