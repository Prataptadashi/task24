import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogEdit = ({ selectedBlog, onUpdated }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        if (selectedBlog) {
            setTitle(selectedBlog.title);
            setContent(selectedBlog.content);
            setAuthor(selectedBlog.author);
        }
    }, [selectedBlog]);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5010/blogs/${selectedBlog.id}`, { title, content, author })
            .then(() => {
                alert("Blog updated successfully!");
                onUpdated();
            })
            .catch(error => console.error("Error updating blog:", error));
    };

    if (!selectedBlog) return null;

    return (
        <form onSubmit={handleUpdate}>
            <h2>Edit Blog</h2>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
            <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <button type="submit">Update Blog</button>
        </form>
    );
};

export default BlogEdit;