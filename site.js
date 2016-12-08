$(document).ready(function() {
   $('#summoner-form').on('submit', function(event) {
    var query = $('#sumLabel').val();
    $.get(
'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + search + "?api_key=RGAPI-1cba763d-5c41-4c45-99cf-f1c75efbed57' + query,
      function(data) {
        var info = data[0];
        $('#summoner-name').html('Summoner: ' + query);
        $('#summoner-level').html('Level: ' + info);
      }); event.preventDefault();

});

}); 

/* BACKUP PLAN */
/* https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/SUMMONERNAME?api_key=RGAPI-1cba763d-5c41-4c45-99cf-f1c75efbed57 */

/*
$(document).ready(function() {
  
});
*/
