import { model, Schema } from 'mongoose';
import { Task as TaskEntity } from 'src/core/task/entity/task.entity';

export const TaskSchema = new Schema<TaskEntity>({
  title: String,
  description: String,
  completed_at: Date,
  created_at: Date,
  updated_at: Date,
});

export const TaskModel = model('Task', TaskSchema);
