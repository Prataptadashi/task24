import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogList = ({ onEdit, refresh }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5010/blogs")
            .then(response => setBlogs(response.data))
            .catch(error => console.error("Error fetching blogs:", error));
    }, [refresh]);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5010/blogs/${id}`)
            .then(() => {
                alert("Blog deleted successfully!");
                setBlogs(blogs.filter(blog => blog.id !== id));
            })
            .catch(error => console.error("Error deleting blog:", error));
    };

    return (
        <div>
            <h2>All Blogs</h2>
            {blogs.map((blog) => (
                <div key={blog.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <small>By {blog.author}</small>
                    <br />
                    <button onClick={() => onEdit(blog)}>Edit</button>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default BlogList;