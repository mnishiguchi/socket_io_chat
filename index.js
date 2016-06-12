/**
 * Server-side
 */

// Initializes app to be a function handler using Express.
var app  = require( 'express' )();

// Supply the app to an HTTP server.
var http = require( 'http' ).Server( app );

// Initialize a new instance of socket.io by passing the HTTP server object.
var io   = require( 'socket.io' )( http );

// Define a route handler.
app.get( '/', function( req, res ){
  // Serve the specified HTML file.
  res.sendFile( __dirname + '/index.html' );
});

// Listen on the connection event for incoming sockets.
io.on( 'connection', function( socket ){

  console.log( 'A user was connected' );
  io.emit( 'user-connected' );

  socket.on( 'chat-message', function( msg ){
    io.emit( 'chat-message', msg );
  });

  socket.on( 'disconnect', function( msg ){
    console.log( 'A user was disconnected' );
    io.emit( 'user-disconnected' );
  });
});

// Make the http server listen on port 3000.
http.listen( 3000, function(){
  console.log( 'listening on *:3000' );
});
