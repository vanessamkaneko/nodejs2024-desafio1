import { ListTaskDto } from 'src/core/task/dto/list-task.dto';
import { UpdateTaskDto } from 'src/core/task/dto/update-task.dto';
import { Task } from 'src/core/task/entity/task.entity';

export interface ITaskMongoDbRepository {
  create(task: Task): Promise<Task>;
  find(query: ListTaskDto): Promise<Task[]>;
  findById(id: string): Promise<Task>;
  update(id: string, payload: UpdateTaskDto): Promise<Task>;
  delete(id: string): Promise<void>;
}

export const ITaskMongoDbRepository = Symbol('ITaskMongoDbRepository');
