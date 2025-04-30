const workspaceService = require('../services/workspaceService');

exports.createWorkspace = async (req, res) => {
  try {
    const { name, userId } = req.body;
    var createdWorkSpace = await workspaceService.createWorkspace(name, mongoose.Types.ObjectId(userId));
    
    res.status(201).json(createdWorkSpace);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllWorkspaces = async (req, res) => {
  try {
    const workspaces = await workspaceService.getAllWorkspaces();
    res.status(200).json(workspaces);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getWorkspaceById = async (req, res) => {
  try {
    const workspace = await workspaceService.getWorkspaceById(req.query.id);
    if (!workspace) return res.status(404).json({ message: "Not Found" });
    res.status(200).json(workspace);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateWorkspace = async (req, res) => {
  try {
    const {name, userId} = req.body;
    const updated = await Workspace.findByIdAndUpdate(
      req.query.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Not Found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteWorkspace = async (req, res) => {
  try {
    const deleted = await Workspace.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not Found" });
    res.status(200).json({ message: "Workspace Deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
