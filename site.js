$(document).ready(function() {
  
  $('#translate-form').on('submit', function(event) {
    alert('Submit Successful!');

    var text = document.getElementById("text").innerHTML;
    google.language.translate(text, 'es', 'en', function(result) {
        var translated = document.getElementById("translation");
        if (result.translation) {
            translated.innerHTML = result.translation;
        }
    });

    event.preventDefault();
  });

});
