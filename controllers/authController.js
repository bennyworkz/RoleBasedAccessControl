const jwtUtils = require("../utils/jwtUtils");

const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "editor", password: "editor123", role: "editor" },
  { username: "viewer", password: "viewer123", role: "viewer" },
];

exports.login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwtUtils.generateToken({ username: user.username, role: user.role });
  res.json({ message: "Login successful", token });
};
