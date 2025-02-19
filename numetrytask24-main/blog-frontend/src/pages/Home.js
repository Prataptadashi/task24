import React, { useState } from "react";
import BlogList from "../components/BlogList";
import BlogForm from "../components/BlogForm";
import BlogEdit from "../components/BlogEdit";

const Home = () => {
    const [refresh, setRefresh] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);

    return (
        <div>
            <h1>Blog Management System</h1>
            {editingBlog ? (
                <BlogEdit selectedBlog={editingBlog} onUpdated={() => {
                    setEditingBlog(null);
                    setRefresh(!refresh);
                }} />
            ) : (
                <BlogForm onBlogAdded={() => setRefresh(!refresh)} />
            )}
            <BlogList onEdit={setEditingBlog} refresh={refresh} />
        </div>
    );
};

export default Home;