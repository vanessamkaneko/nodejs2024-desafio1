import { Task } from 'src/core/task/entity/task.entity';

export interface ITaskGateway {
  createTask(task: Task): Promise<Task>;
}

export const ITaskGateway = Symbol('ITaskGateway');
