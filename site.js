$(document).ready(function() {
/* ON SUBMIT OF dictionary FORM WILL EXECUTE */
   $('#dictionaryform').on('submit', function(event) {
     
     /* DONT KNOW WHAT THIS IS */
    var word = $('#word').val();
     
     /* GETS DATA FROM API HERE AND RETURNS */
    $.get(
      'https://translate.yandex.net/api/v1.5/tr.json/translate?key={dict.1.1.20161207T070443Z.34b65ed076d1cb0b.c5d3b39d789b9abaafcd74112159922fc3331d6d}&text={#word}&lang={es} 
      
      /*https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20161207T070443Z.34b65ed076d1cb0b.c5d3b39d789b9abaafcd74112159922fc3331d6d&lang=en-en&text=#word',*/
      
      function(data) {
        var data = data[0];
        $('#word').html('Word: ' + word);
        $('#definition').html('Definition: ' +data.def);
        });
    event.preventDefault();
});
