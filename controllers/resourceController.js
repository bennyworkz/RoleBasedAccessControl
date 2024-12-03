exports.getAdminData = (req, res) => {
    res.json({ message: "Admin resource accessed." });
  };
  
  exports.getEditorData = (req, res) => {
    res.json({ message: "Editor resource accessed." });
  };
  
  exports.getViewerData = (req, res) => {
    res.json({ message: "Viewer resource accessed." });
  };
  