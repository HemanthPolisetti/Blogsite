import express from 'express';
import { getAllblogs,addBlog,updateBlog, getBlogbyId, deleteBlog, getUserBlogs } from "../controllers/blogController.js";

const blogRouter = express.Router();

blogRouter.get('/',getAllblogs)
blogRouter.post('/',addBlog)
blogRouter.get('/:id',getBlogbyId)
blogRouter.put('/:id',updateBlog)
blogRouter.delete('/:id',deleteBlog)
blogRouter.get('/user/:id',getUserBlogs)


export default blogRouter;