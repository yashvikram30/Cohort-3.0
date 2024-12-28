"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
// websocket event handler
wss.on("connection", function (socket) {
    console.log("user connected");
    // whenever you receive a message from the client
    // socket.on("message",(e)=>{
    //     console.log(e.toString());  
    // })
    // ping-pong
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
