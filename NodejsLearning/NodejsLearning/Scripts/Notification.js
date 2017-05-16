//$(function () {
debugger;
var socket = io("http://localhost:1337");
//var socket = io("ws://localhost:1337");
//var socket = io('ws://localhost:1337', { transports: ['websocket'] });
socket.on('message', function (message) {
    alert('The server has a message for you: ' + message);
});
$('#btnSend').click(function (e) {
    debugger;
    e.preventDefault();
    socket.emit('chatmessage', $('#m').val());
    $('#m').val('');
    return false;
});
socket.on('chatmessage', function (msg) {
    debugger;
    $('#messages').append($('<li>').text(msg));
});
//});