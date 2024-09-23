import { Task } from 'src/core/task/entity/task.entity';
import { ITaskGateway } from './ITaskGateway';
import { Inject } from '@nestjs/common';
import { ITaskMongoDbRepository } from 'src/infrastructure/persistence/repositories/task/mongodb/ITask-mongodb.repository';

export class TaskGateway implements ITaskGateway {
  constructor(
    @Inject(ITaskMongoDbRepository)
    private taskRepository: ITaskMongoDbRepository,
  ) {}

  createTask(task: Task): Promise<Task> {
    const createTask = this.taskRepository.create(task);

    return createTask;
  }
}
