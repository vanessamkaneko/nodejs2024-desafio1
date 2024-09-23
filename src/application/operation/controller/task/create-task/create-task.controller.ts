import { BadRequestException, Inject } from '@nestjs/common';
import { TaskDto } from 'src/core/task/dto/task.dto';
import { Task } from 'src/core/task/entity/task.entity';
import { CreateTaskUseCase } from 'src/core/task/usecase/task/create-task/create-task.usecase';

export class CreateTaskController {
  constructor(
    @Inject(CreateTaskUseCase)
    private createTaskUseCase: CreateTaskUseCase,
  ) {}

  async handle(task: TaskDto): Promise<Task> {
    if (!task.description || task.title) {
      throw new BadRequestException(
        'A task must have a title and a description!',
      );
    }

    const createTask = this.createTaskUseCase.execute(task);

    return createTask;
  }
}
