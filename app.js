(function(window, document) {
  
  const URI_POSTS = "https://jsonplaceholder.typicode.com/posts";
  const URI_USERS = "https://jsonplaceholder.typicode.com/users";

  getPosts(URI_POSTS);
  getAuthors(URI_USERS);
  
})(window, document);

/**
 * getPosts
 * @desc Return a array of posts
 * @param URI
 */ 
function getPosts(URI) {
  $.getJSON(URI, function(data) {
    let items = [];
    
    $.each( data, function( key, val ) {
      items.push(postDom(key,val));
      
    });

    // for(let i in items) {
    //   // document.querySelector(".post-list").appendChild(items[i]);
    //   // console.log(items[i]);
    // }
    
    $( "<ul/>", {
      "class": "post-list",
      html: items.join( "" )
    }).appendTo( ".app-main--posts" );
    
    console.log('ok');
  });
}

/**
 * Dom of posts
 * @desc Return a DOM of post
 * @param key
 * @param val
 */ 
function postDom(key, value) {
  
  let now  = Date();
  let post = 
  '<li class="post-list--item">' + 
    '<h4>'+ value.title + '</h4>'+ 
    '<p>'+ value.body +'</p>'+
    '<span>'+ now +'</span>'+
  '</li>';

  return post
}

/**
 * getAuthors
 * @desc Get a array of authors
 * @param URI
 */ 
function getAuthors(URI) {

  $.getJSON(URI, (data) => {
    let items = [];
    let el = document.querySelector('.author-list--content');
    
    for(let i in data) {
      items.push(authorDom(data[i]));
    }

    el.innerHTML = items.join("");
  });
}

function authorDom(item) {
  let author = '<div>'+ item.username +'</div>';
  return author;
}