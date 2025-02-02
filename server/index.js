const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const messagesRoute = require('./routes/messagesRoute');
const app = express();
const socket = require('socket.io');
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {

}).then(() => {
    console.log("DB Connected successfully");
}).catch((e) => {
    console.error("Error connecting to DB: ", e.message);
});

app.use("/api/auth", userRoutes)
app.use("/api/messages", messagesRoute)


const server = app.listen(process.env.PORT, () => {
    console.log(`Server Starded in Prot ${process.env.PORT}`)
});

const io = socket(server, {
    cors: {
        origin: "https://sigma-chat-app-server.vercel.app/",
        credentials: true,
    },
});

global.onlineUsers = new Map()


io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });


    socket.on("send-msg", (data) => {
        const sendUserSocket = onlineUsers.get(data.to);
        if (sendUserSocket) {
            socket.to(sendUserSocket).emit("msg-recieve", data.message);
        }
    });
}); 
