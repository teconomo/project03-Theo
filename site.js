var sumName = "";

function findSummonerLevel() {
  var INPUT = "";
  INPUT = $("#userName").val();

  /* if input was not empty */
  if (INPUT !== "") {
    /* Request for data */
    $.ajax({
      url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + INPUT + '?api_key=RGAPI-1cba763d-5c41-4c45-99cf-f1c75efbed57',
      type: 'GET',
      dataType: 'json',
      data: {

      },

      /* For names with spaces, necessary to replace */
      success: function (json) {
        var REVISEDINPUT = INPUT.replace(" ", "");
        REVISEDINPUT.toLowerCase().trim();
        summonerLevel = json[REVISEDINPUT].summonerLevel;
        document.getElementById("sLevel").innerHTML = "Summoner Level: " + summonerLevel;
        sumName = json[REVISEDINPUT].name;
      },

      /* for accounts not found */
      error: function () {
        alert("Account does not exist or is banned");
      }
    });
  } else {/*nothing*/}
}