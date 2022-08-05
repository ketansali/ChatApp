

const { sendMessage, allMessages } = require("../controller/Messages.Controller");
const { protect } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/messages/sendMessage",protect,sendMessage );
router.get("/messages/allMessages/:chatId",protect,allMessages );



module.exports = router;
