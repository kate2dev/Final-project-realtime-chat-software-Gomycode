const authSocket = require("./middleware/authSocket");
const newConnectionHandler = require("./socketHandlers/newConnectionHandler");
const disconnectHandler = require("./socketHandlers/disconnectHandler");

const serverStore = require("./serverStore");



// **  Creates a Socket.IO server instance (io) attached to the provided HTTP server (server). It also sets up Cross-Origin Resource Sharing (CORS) to allow connections from potentially different origins 
const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  serverStore.setSocketServerInstance(io);

  io.use((socket, next) => {
    authSocket(socket, next);
  });


  // **  This retrieves a list of online users from the serverStore and broadcasts it to all connected clients using the "online-users" event.


  const emitOnlineUsers = () => {
    const onlineUsers = serverStore.getOnlineUsers();
    io.emit("online-users", { onlineUsers });
  };

  // This listens for the "connection" event emitted when a user connects. Here's what happens when a user connects:
  io.on("connection", (socket) => {
    console.log("user connected");
    console.log(socket.id);

    newConnectionHandler(socket, io);

    // Calls emitOnlineUsers to broadcast the updated list of online users, including the new user
    emitOnlineUsers();


    // Calls emitOnlineUsers to broadcast the updated list of online users, including the new user.
    socket.on("disconnect", () => {
      disconnectHandler(socket);
    });
  });


  // **  Sets an interval that calls emitOnlineUsers every 8 seconds. This keeps the list of online users updated and broadcast to connected clients periodically.
  setInterval(() => {
    emitOnlineUsers();
  }, [1000 * 8]);
};

module.exports = {
  registerSocketServer,
};
