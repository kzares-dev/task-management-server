import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { TasksService } from 'src/service/task.service';
import { CreateTaskDto, UpdateTaskDto } from 'src/dto/task.dto';

@Controller('projects/:projectId/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getTasks(@Param('projectId') projectId: string) {
    return this.tasksService.getTasksByProjectId(projectId);
  }

  @Post()
  async createTask(@Param('projectId') projectId: string, @Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(projectId, createTaskDto);
  }

  @Put(':taskId')
  async updateTask(
    @Param('projectId') projectId: string,
    @Param('taskId') taskId: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.updateTask(projectId, taskId, updateTaskDto);
  }

  @Delete(':taskId')
  async deleteTask(@Param('projectId') projectId: string, @Param('taskId') taskId: string) {
    return this.tasksService.deleteTask(projectId, taskId);
  }
}
