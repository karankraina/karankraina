import { Blog } from '../models/blog.model';
import connection from './connection';

export const findAll = async (queryParams?: any): Promise<Blog[]> => {
    try {
        let query = `SELECT * FROM blog`;
        if (queryParams) {
            query += ` WHERE true`;

            if (queryParams.order) {
                const [column, direction] = queryParams.order.split(':');
                query += ` ORDER BY ${column} ${direction}`;
            }
        }

        const result = await connection.any(query);
        result.forEach((item: any) => {
            item = new Blog(item);
        });
        return result;
    } catch (error) {
        throw error;
    }
};

export const findOne = async (id: number): Promise<Blog> => {
    try {
        const result = await connection.any(`SELECT * FROM blog WHERE id = $1`, [id]);
        result.forEach((item: any) => {
            item = new Blog(item);
        });
        return result[0];
    } catch (error) {
        throw error;
    }
};

export const save = async (blog: Blog): Promise<Blog> => {
    try {
        if (!blog.id) {

            const result = await connection.one(`INSERT INTO blog (title, author, description, content, "createdAt", "isPublished") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [blog.title, blog.author, blog.description, blog.content, blog.createdAt, blog.isPublished]);
            return new Blog(result);
        }
    } catch (error) {
        throw error;
    }
};