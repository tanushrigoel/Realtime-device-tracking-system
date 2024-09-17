import express from "express"
import { Server } from "socket.io";
import {createServer} from "http"
import { Socket } from "dgram";
import path from "path";

const app=express();
const httpServer=createServer(app);
const io=new Server(httpServer)

io.on("connection",(socket)=>{
    socket.on("send-location", function(data){
        io.emit("receive-location", {id:socket.id, ...data})
    })
    console.log("connected")

    socket.on("disconnect", function(){
        io.emit("user-disconnect", socket.id)
    })
})

app.set("view engine","ejs");
app.use(express.static( "public"))

app.get('/', function(req, res){
    res.render("index");
})
httpServer.listen(3000)

// app.listen(3000);