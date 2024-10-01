import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ITaskGateway } from 'src/application/operation/gateway/ITaskGateway';
import { CreateTaskDto } from 'src/core/task/dto/create-task.dto';
import { Task } from 'src/core/task/entity/task.entity';

@Injectable()
export class CreateTaskUseCase {
  constructor(
    @Inject(ITaskGateway)
    private taskGateway: ITaskGateway,
  ) {}

  async execute(payload: CreateTaskDto): Promise<Task> {
    if (!payload.description || !payload.title) {
      throw new BadRequestException(
        'A task must have a title and a description!',
      );
    }

    const newTask = Task.new(payload);

    const taskCreated = await this.taskGateway.createTask(newTask);

    return taskCreated;
  }
}
