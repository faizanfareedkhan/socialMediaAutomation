const express = require("express");
const router = express.Router();
const workspaceController = require("../controllers/workspaceController");

//  endpoints
router.post("/createworkspace", workspaceController.createWorkspace);        // POST
router.get("/getallworkspace", workspaceController.getAllWorkspaces);       // GET
router.get("/getworkspacebyid/:id", workspaceController.getWorkspaceById);  // GET
router.put("/updateworkspace/:id", workspaceController.updateWorkspace);    // PUT
router.delete("/deleteworkspace/:id", workspaceController.deleteWorkspace); // DELETE

module.exports = router;
