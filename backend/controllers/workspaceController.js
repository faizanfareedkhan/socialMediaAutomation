const Workspace = require("../modals/workspaceModel");

exports.createWorkspace = async (req, res) => {
  try {
    const { name, owner } = req.body;
    const workspace = new Workspace({ name, owner });
    await workspace.save();
    res.status(201).json(workspace);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllWorkspaces = async (req, res) => {
  try {
    const workspaces = await Workspace.find();
    res.status(200).json(workspaces);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getWorkspaceById = async (req, res) => {
  try {
    const workspace = await Workspace.findById(req.params.id);
    if (!workspace) return res.status(404).json({ message: "Not Found" });
    res.status(200).json(workspace);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateWorkspace = async (req, res) => {
  try {
    const updated = await Workspace.findByIdAndUpdate(
      req.params.id,
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
