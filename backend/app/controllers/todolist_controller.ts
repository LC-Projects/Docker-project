import Todolist from '#models/todolist';
import type { HttpContext } from '@adonisjs/core/http'

export default class TodolistController {
    public async index({ response }: HttpContext) {
        const todolists = await Todolist.all();
        if (todolists) {
            return response.json(todolists);
        }
        else
        {
            return response.json({ message: 'No data found' });
        }
    }

    public async store({ request, response }: HttpContext) {
        const data = request.only(['title', 'comment', 'status']);
        const todolist = await Todolist.create(data);
        return response.json(todolist);
    }

    public async show({ params, response }: HttpContext) {
        const todolist = await Todolist.find(params.id);
        if (todolist) {
            return response.json(todolist);
        }
        else
        {
            return response.json({ message: 'No data found' });
        }
    }

    public async update({ params, request, response }: HttpContext) {
        const todolist = await Todolist.find(params.id);
        if (todolist) {
            const data = request.only(['title', 'comment']);
            todolist.merge(data);
            await todolist.save();
            return response.json(todolist);
        }
        else
        {
            return response.json({ message: 'No data found' });
        }
    }

    public async updateStatus({ params, request, response }: HttpContext) {
        const todolist = await Todolist.find(params.id);
        if (todolist) {
            const data = request.only(['status']);
            todolist.merge(data);
            await todolist.save();
            return response.json(todolist);
        }
        else
        {
            return response.json({ message: 'No data found' });
        }
    }

    public async destroy({ params, response }: HttpContext) {
        const todolist = await Todolist.query().where('id', params.id).first()

        if (!todolist) {
            return response.status(404).json({
                message: 'Movie to watch not found',
                code: 404
            })
        }

        await todolist.delete()

        return response.status(200).json({
            message: 'Movie to watch deleted',
            code: 200
        })
    }
    // public async destroy({ params, response }: HttpContext) {
    //     const todolist = await Todolist.find(params.id);
    //     if (todolist) {
    //         await todolist.delete();
    //         return response.json({ message: 'Data deleted' });
    //     }
    //     else
    //     {
    //         return response.json({ message: 'No data found' });
    //     }
    // }
}