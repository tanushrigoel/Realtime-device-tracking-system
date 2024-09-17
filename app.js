import express from "express"
import { Server } from "socket.io";
import {createServer} from "http"
import { Socket } from "dgram";


const app=express();
const httpServer=createServer(app);
const io=new Server(httpServer)


app.set("view engine","ejs");
app.set(express.static(path.join(__dirname, "public")))

app.get('/hello', function(req, res){
    res.send("Hello");
})
httpServer.listen(3000)

// app.listen(3000);