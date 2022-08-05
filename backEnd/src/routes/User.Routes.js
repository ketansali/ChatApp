
const { signUp, signIn, getUsers } = require("../controller/User.Controller");
const { protect } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/user/signUp", signUp);
router.post("/user/signIn", signIn);
router.get("/user/getUsers",protect, getUsers);


module.exports = router;
