const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./config/db");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/blogs", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});