import { Injectable } from '@nestjs/common';
import { ITaskMongoDbRepository } from './ITask-mongodb.repository';
import { Task } from 'src/core/task/entity/task.entity';
import { TaskModel } from 'src/infrastructure/persistence/bds/mongodb/schema/taskModel';

@Injectable()
export class TaskMongoDbRepository implements ITaskMongoDbRepository {
  async create(task: Task): Promise<Task> {
    const taskCreated = await TaskModel.create({ ...task });

    return taskCreated;
  }
}
