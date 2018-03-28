/*const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://addajet.blob.core.windows.net:443/scripts/response.json', true);

request.responseType = 'json';
request.send();

request.onload = function() {
    var ships = JSON.parse(this.responseText);
    console.log(ships);
  }

  var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var ships = JSON.parse(this.responseText);
        document.getElementById("index").innerHTML = ships.index;
        console.log(ships);
    }
};
xmlhttp.open("GET", "http://addajet.blob.core.windows.net:443/scripts/response.json", true);
xmlhttp.send();*/

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

      // Check if the XMLHttpRequest object has a "withCredentials" property.
      // "withCredentials" only exists on XMLHTTPRequest2 objects.
      xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

      // Otherwise, check if XDomainRequest.
      // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
      xhr = new XDomainRequest();
      xhr.open(method, url);

  } else {

      // Otherwise, CORS is not supported by the browser.
      xhr = null;

  }
  return xhr;
}

var xhr = createCORSRequest('GET', 'https://addajet.blob.core.windows.net/scripts/response.json');
if (!xhr) {
  throw new Error('CORS not supported');
}

xhr.onload = function () {
  var responseText = xhr.responseText;
  console.log(responseText);
  // process the response.
};

xhr.send();

jQuery(function(){
  
  );
});