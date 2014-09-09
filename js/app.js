var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');
var url = '../pitchers.html';

btn.addEventListener('click', changeRoster, false);

function test () {
  alert('clicked');
}

function changeRoster(url) {
  // synchronous request
  // we are waiting to get a response
  // from the server.
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  // getting an error here
  // I'm suspecting it's because we are not
  // getting the file.
  xhr.send(xhr.responseText);
  //var roster = document.getElementById('roster');
  //roster.innerHTML = xhr.responseText;
}
