const router = require("express").Router();
const Message = require("../model/Message");

/**
 * ! Home Routing
 */

router.get("/", (req, res) => {
    res.render("../views/index.ejs");
});

router.post("/", async (req, res) => {
    const { fullName, email, mobile, emailSubject, message } = req.body;

    try {
        const newMessage = await Message.create({
            fullName, email, mobile,
            emailSubject, message
        });
        newMessage.save();
        res.status(200).json(newMessage);
    } catch (err) {
        res.status(500).json({ err });
    }
})

module.exports = router;