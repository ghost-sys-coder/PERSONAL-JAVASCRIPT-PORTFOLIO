const mongoose = require("mongoose");


const messageSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    emailSubject: {
        type: String,
        required: true
    },
    message: {
        type: String
    }
});


const Message = new mongoose.model("Message", messageSchema);

module.exports = Message;
