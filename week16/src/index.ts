import { server } from "typescript";
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8080});

// websocket event handler
wss.on("connection",function(socket){
    console.log("user connected")

    // whenever you receive a message from the client

    socket.on("message",(e)=>{
        console.log(e.toString());  
    })

    
})