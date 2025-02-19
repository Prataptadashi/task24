import axios from "axios";

const API_URL = "http://localhost:5010/blogs";

export const fetchBlogs = () => axios.get(API_URL);
export const createBlog = (blog) => axios.post(API_URL, blog);
export const updateBlog = (id, blog) => axios.put(`${API_URL}/${id}`, blog);
export const deleteBlog = (id) => axios.delete(`${API_URL}/${id}`);
export const getBlogById = (id) => axios.get(`${API_URL}/${id}`);