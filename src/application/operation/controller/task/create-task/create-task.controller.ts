import { Inject } from '@nestjs/common';
import { CreateTaskDto } from 'src/core/task/dto/create-task.dto';
import { Task } from 'src/core/task/entity/task.entity';
import { CreateTaskUseCase } from 'src/core/task/usecase/task/create-task/create-task.usecase';

export class CreateTaskController {
  constructor(
    @Inject(CreateTaskUseCase)
    private createTaskUseCase: CreateTaskUseCase,
  ) {}

  async handle(task: CreateTaskDto): Promise<Task> {
    const createTask = await this.createTaskUseCase.execute(task);

    return createTask;
  }
}
