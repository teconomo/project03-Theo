var sumName = "";

function findSummonerLevel() {
    var SUMMONER_NAME = "";
    SUMMONER_NAME = $("#userName").val();
  
    /* if input was not empty */
    if (SUMMONER_NAME !== "") {
      $.ajax({
            url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + SUMMONER_NAME + '?api_key=RGAPI-1cba763d-5c41-4c45-99cf-f1c75efbed57',
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ", "");
    }
        
        
}