import { Task } from 'src/core/task/entity/task.entity';

export interface ITaskMongoDbRepository {
  create(task: Task): Promise<Task>;
}

export const ITaskMongoDbRepository = Symbol('ITaskMongoDbRepository');
