import {
  Body,
  Controller,
  Inject,
  Post,
  Query,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateTaskController } from 'src/application/operation/controller/task/create-task/create-task.controller';
import { ListTasksController } from 'src/application/operation/controller/task/list-tasks/list-tasks.controller';
import { ListTaskDto } from 'src/core/task/dto/list-task.dto';
import { CreateTaskDto } from 'src/core/task/dto/create-task.dto';
import { Task } from 'src/core/task/entity/task.entity';
import { UpdateTaskController } from 'src/application/operation/controller/task/update-task/update-task.controller';
import { UpdateTaskDto } from 'src/core/task/dto/update-task.dto';
import { DeleteTaskController } from 'src/application/operation/controller/task/delete-task/delete-task.controller';

@Controller('/tasks')
export class TaskControllerRoute {
  constructor(
    @Inject(CreateTaskController)
    private createTaskController: CreateTaskController,
    private listTasksController: ListTasksController,
    private updateTaskController: UpdateTaskController,
    private deleteTaskController: DeleteTaskController,
  ) {}

  @Post('/')
  async create(@Body() payload: CreateTaskDto): Promise<Task> {
    const createTask = this.createTaskController.handle(payload);
    return createTask;
  }

  @Get('/')
  async list(@Query() query: ListTaskDto): Promise<Task[]> {
    const listTasks = this.listTasksController.handle(query);
    return listTasks;
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() payload: UpdateTaskDto,
  ): Promise<Task> {
    const updateTask = this.updateTaskController.handle(id, payload);
    return updateTask;
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    const deleteTask = this.deleteTaskController.handle(id);
    return deleteTask;
  }

  // @Patch('/:id/complete') // update complete task
}
