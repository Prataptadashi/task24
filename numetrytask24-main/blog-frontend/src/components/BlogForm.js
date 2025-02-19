import React, { useState } from "react";
import axios from "axios";

const BlogForm = ({ onBlogAdded }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5010/blogs", { title, content, author })
            .then(() => {
                alert("Blog added successfully!");
                onBlogAdded();
                setTitle("");
                setContent("");
                setAuthor("");
            })
            .catch(error => console.error("Error adding blog:", error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Blog</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
            <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <button type="submit">Add Blog</button>
        </form>
    );
};

export default BlogForm;