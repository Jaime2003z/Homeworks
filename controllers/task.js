const express = require('express');
const Task = require('../models/taskSheme');

const TaskCreation = async (req, res = express.request) => {
    const task = new Task(req.body);

    try {
        task.user = req.uid;
        const saved = await task.save();
        res.json({
            ok: true,
            task: saved
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            task: 'Opps! Fatal error',
        })
    }
}

const ListingTasks = async (req, res = express.request) => {
    const task = await Task.find().populate('user', 'name');

    try {
        res.status(200).json({
            ok: true,
            task,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            task: 'Fatal error',
        })

    }
}

const updateTasks = async (req, res = express.request) => {
    const { id } = req.params;
    const { title } = req.body;

    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({
                ok: false,
                message: 'Task not found',
            });
        }
        task.title = title;
        await task.save();

        res.json({
            ok: true,
            task: task,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Internal Error',
        });
    }
};

const deleteTasks = async (req, res = express.request) => {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndDelete(id);

        if (!task) {
            return res.status(404).json({
                ok: false,
                message: 'Opps! Task not found',
            });
        }
        res.json({
            ok: true,
            message: 'Deleted successfully',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Opps! Internal error',
        });
    }
};

module.exports = {
    ListingTasks,
    TaskCreation,
    updateTasks,
    deleteTasks
}