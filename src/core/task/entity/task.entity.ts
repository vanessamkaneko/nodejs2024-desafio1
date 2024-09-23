import { TaskDto } from '../dto/task.dto';

export class Task {
  title: string;

  description: string;

  completed_at: Date | null;

  created_at: Date;

  updated_at: Date;

  private constructor(payload: TaskDto) {
    this.title = payload.title;
    this.description = payload.description;
    this.completed_at = null;
  }

  public static new(payload: TaskDto) {
    const task = new Task(payload);
    return task;
  }
}
