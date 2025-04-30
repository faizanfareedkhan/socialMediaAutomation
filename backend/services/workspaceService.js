const workspace = require('../modals/workspaceModel');


const createWorkspace = async function(name, userId) {
  try {
    var newWorkeSpace = new workspace();
    newWorkeSpace.name = name;
    newWorkeSpace.userId = userId;
    let createdWorkspace = await newWorkeSpace.save();
    return createdWorkspace;
  } catch (error) {
    return null;
  }
}

const getWorkspaceById = async function (id) {
  try {
    let getWorkspace = await Workspace.findById(id);
    return getWorkspace;
  } catch (error) {
    return null;
  }
}

module.exports = { createWorkspace, getWorkspaceById };