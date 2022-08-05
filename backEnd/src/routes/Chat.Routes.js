
const { accessChat, fetchChats, createGroupChat, renameGroup, addToGroup, removeFromGroup } = require("../controller/Chat.controller");
const { protect } = require("../middleware/authMiddleware");

const router = require("express").Router();
router.post('/chat/accessChat',protect,accessChat)
router.get('/chat/fetchChats',protect,fetchChats)
router.post('/chat/createGroupChat',protect,createGroupChat)
router.post('/chat/renameGroup',protect,renameGroup)
router.post('/chat/addToGroup',protect,addToGroup)
router.post('/chat/removeFromGroup',protect,removeFromGroup)


module.exports = router;
