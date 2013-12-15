module.exports = function (socket) {
  var users = 0;

  // notify other clients that a new user has joined
  socket.broadcast.emit('user:join', users);

  // broadcast a user's message to other users
  socket.on('send:message', function (data) {
    console.log(data);
    socket.broadcast.emit('send:message', data);
  });

};