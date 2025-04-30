const sysWorkspaceUser = require('../modals/sysWorkspaceUser');


const createWorkspaceUser = async function(workspaceId, userId, userRole) {
  try {
    var newSysWorkspaceUser = new sysWorkspaceUser();
    newSysWorkspaceUser.workspaceId = workspaceId;
    newSysWorkspaceUser.userId = userId;
    newSysWorkspaceUser.userRole = userRole;
    var createdWorkspaceUser = await newSysWorkspaceUser.save();
    return createdWorkspaceUser;
  } catch (error) {
    return null;
  }
}


module.exports = { createWorkspaceUser };