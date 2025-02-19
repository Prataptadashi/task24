const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Add a new blog post
router.post("/", (req, res) => {
  const { title, content, author } = req.body;
  const query = "INSERT INTO blogs (title, content, author) VALUES (?, ?, ?)";
  db.query(query, [title, content, author], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Blog added successfully!" });
  });
});

// Fetch all blogs
router.get("/", (req, res) => {
  db.query("SELECT * FROM blogs", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Fetch a single blog by ID
router.get("/:id", (req, res) => {
  db.query("SELECT * FROM blogs WHERE id = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: "Blog not found" });
    res.json(result[0]);
  });
});

// Update a blog post
router.put("/:id", (req, res) => {
  const { title, content, author } = req.body;
  const query = "UPDATE blogs SET title = ?, content = ?, author = ? WHERE id = ?";
  db.query(query, [title, content, author, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Blog updated successfully!" });
  });
});

// Delete a blog post
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM blogs WHERE id = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Blog deleted successfully!" });
  });
});

module.exports = router;