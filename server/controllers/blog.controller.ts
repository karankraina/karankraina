import { Request, Response } from 'express';
import { Blog } from '../models/blog.model';
import * as BlogRepository from '../repositories/blog.repository';


export async function getBlogs(request: Request, response: Response): Promise<Response> {
    try {
        const result = await BlogRepository.findAll(request.query);
        return response.status(200).json(result);
    } catch (error) {
        return response.status(500).send(error);
    }
};

export async function getBlog(request: Request, response: Response): Promise<Response> {
    try {
        const { id } = request.params;
        const result = await BlogRepository.findOne(+id);
        return response.status(200).json(result);
    } catch (error) {
        return response.status(500).send(error);
    }
};

export async function saveBlog(request: Request, response: Response): Promise<Response> {
    try {
        const blog = new Blog(request.body);
        const result = await BlogRepository.save(blog);
        return response.status(200).json(result);
    } catch (error) {
        return response.status(500).send(error);
    }
};