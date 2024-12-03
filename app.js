const express = require("express");
const authRoutes = require("./routes/authRoutes");
const resourceRoutes = require("./routes/resourceRoutes");

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/resources", resourceRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
