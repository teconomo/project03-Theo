$(document).ready(function() {
   $('#dictionary-form').on('submit', function(event) {
    var query = $('#string').val();
    $.get(
'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20161207T050539Z.4477287c82f93220.0ffafbf07a34f70b5034bdfee30d4d7d1ae5f35f&lang=en-en&text=' + query,
      function(data) {
        var definition = data[];
        $('#word').html('Word: ' + query);
        $('#definition').html('Definition: ' + definition.push(data[0]));
      });
    event.preventDefault();
});

}); 
