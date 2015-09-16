define(["lodash"], function(_) {
  
// this will take out the duplicate neil young 
  return function(allSongsArray) {
    var uniqueArtists = _.chain(allSongsArray)
                         .uniq("info.artist")
                         .pluck("info.artist")
                         .value();
    
    return {
      uniqueArtists: uniqueArtists
      
    }
  };
});