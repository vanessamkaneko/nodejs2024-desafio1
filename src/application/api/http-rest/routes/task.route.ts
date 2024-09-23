import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateTaskController } from 'src/application/operation/controller/task/create-task/create-task.controller';
import { TaskDto } from 'src/core/task/dto/task.dto';
import { Task } from 'src/core/task/entity/task.entity';

@Controller('/tasks')
export class TaskControllerRoute {
  constructor(
    @Inject(CreateTaskController)
    private createTaskController: CreateTaskController,
  ) {}

  @Post('/') // create task
  async create(@Body() payload: TaskDto): Promise<Task> {
    const createTask = this.createTaskController.handle(payload);
    return createTask;
  }

  // @Get('/') // list tasks

  // @Put('/:id') // update task

  // @Delete('/:id') // delete task

  // @Patch('/:id/complete') // update complete task
}
