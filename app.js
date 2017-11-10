(function(window, document) {
  let URL = "https://www.refugerestrooms.org/api/v1/restrooms.json";
  let URI = "https://jsonplaceholder.typicode.com/posts";
  
  $.getJSON(URI, function(data) {
    let items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val.title + "</li>" );
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( ".app-main--posts" );
  });
})(window, document);