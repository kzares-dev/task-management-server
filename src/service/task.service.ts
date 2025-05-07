import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from 'src/model/task.model';
import { CreateTaskDto, UpdateTaskDto } from 'src/dto/task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) { }

    async getTasksByProjectId(projectId: string): Promise<Task[]> {
        return this.taskModel.find({ projectId }).exec();
    }
    async createTask(projectId: string, createTaskDto: CreateTaskDto): Promise<Task> {
        const newTask = new this.taskModel({ ...createTaskDto, projectId });
        return newTask.save();
    }

    async updateTask(projectId: string, taskId: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
        return this.taskModel.findOneAndUpdate({ _id: taskId, projectId }, updateTaskDto, { new: true }).exec();
    }

    async deleteTask(projectId: string, taskId: string): Promise<Task> {
        return this.taskModel.findOneAndDelete({ _id: taskId, projectId }).exec();
    }
}
