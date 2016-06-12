# Socket.io chat

In this repo, I learn how to use Socket.io to build a simple realtime chat app, following
the [Getting Started](http://socket.io/get-started/chat/) guide
of the Socket.IO website.

[Source code](https://github.com/rauchg/chat-example)

## Get Started

Install dependencies

```
npm install
```

Start the server

```
node index.js
```

Point you browser to [http://localhost:3000](http://localhost:3000)


## Memo

#### Sockets

- Provides a bi-directional communication channel between a client and a server.
- Most realtime chat systems are architected around sockets.

#### Socket.io
- Composed of two parts:
  + A server that mounts on the Node.JS HTTP Server: `socket.io`
  + A client library that loads on the browser side: `socket.io-client`
- NOTE: During development, `socket.io` serves the client automatically for us.
- We can send and receive any events we want, with any data we want:
  + Any objects that can be encoded as JSON will do
  + Binary data is supported, too

#### [Express](http://expressjs.com/)

- A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
