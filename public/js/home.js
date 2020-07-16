'use strict';
var roomUrl;

$( document ).ready(function() {
    generateRoomUrl();

}); // end of document.ready

/*** Generates a random string. Example: axjf7  for rndom url  e.g. http://www.justbeepme.in/axjf7
*/
function shortUrl() {
    return ("000000" + (Math.random()*Math.pow(36,6) << 0).toString(36)).slice(-6)
}

/*** Set the href for the room
*/
function generateRoomUrl() {
    var room = shortUrl();
	var link = document.getElementById("room-url");
	roomUrl =  'http://'+window.location.host+'/'+room;
	link.href = roomUrl;
	link.innerHTML = roomUrl;
}