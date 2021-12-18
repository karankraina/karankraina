import { Router } from 'express';

import * as blog from '../controllers/blog.controller';

const router = Router();

router.get('/', blog.getBlogs);

router.post('/', blog.saveBlog);

// router.put('/:id([0-9]+)', blog.insertOrUpdateBlog);

router.get('/:id([0-9]+)', blog.getBlog);

// router.delete('/:id([0-9]+)', blog.deleteBlog);

export { router as blog };
