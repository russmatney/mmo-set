module.exports = function (socket, thisSocket) {

  // init connects to an existing game or creates a new one
  socket.on('init', function(gameId){
    this.gameId = gameId;
    console.log(this.gameId);

    this.join(this.gameId);

    socket.broadcast.to(this.gameId).emit('user:join');

    // build game if it hasn't been built
  });

  // broadcast a user's message to other users
  socket.on('send:message', function (data) {
    socket.broadcast.to(this.gameId).emit('send:message', data);
  });

};