const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController"); // Ensure correct path


router.get("/getAllUsers", userController.getAllUsers);
router.post("/register", userController.registerUser);
router.get("/getUserById/:id", userController.getUserById);
router.put("/updateUser/:id", userController.updateUser);
router.delete("/deleteUser/:id", userController.deleteUser);

module.exports = router;






// const express = require("express");
// const { registerUser, loginUser, getAllUsers, getUserById, updateUser, deleteUser } = require("../controllers/userController");

// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.get("/getUsers", getAllUsers);
// router.get("/getusersById/:id", getUserById);
// router.put("/updateUsers/:id", updateUser);
// router.delete("/deleteUsers/:id", deleteUser);

// module.exports = router;
