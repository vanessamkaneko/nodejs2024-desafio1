import { Module } from '@nestjs/common';
import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';
import { ITaskGateway } from '../operation/gateway/ITaskGateway';
import { ITaskMongoDbRepository } from 'src/infrastructure/persistence/repositories/task/mongodb/ITask-mongodb.repository';
import { TaskGateway } from '../operation/gateway/TaskGateway';
import { CreateTaskUseCase } from 'src/core/task/usecase/task/create-task/create-task.usecase';
import { CreateTaskController } from '../operation/controller/task/create-task/create-task.controller';
import { TaskControllerRoute } from '../api/http-rest/routes/task.route';
import { TaskMongoDbRepository } from 'src/infrastructure/persistence/repositories/task/mongodb/Task-mongodb.repository';

const persistenceProviders: Provider[] = [
  {
    provide: ITaskMongoDbRepository,
    useFactory: () => new TaskMongoDbRepository(),
    inject: [],
  },
  {
    provide: ITaskGateway,
    useFactory: (taskMongoDbRepository: ITaskMongoDbRepository) =>
      new TaskGateway(taskMongoDbRepository),
    inject: [ITaskMongoDbRepository],
  },
];

const useCaseProviders: Provider[] = [
  {
    provide: CreateTaskUseCase,
    useFactory: (taskGateway: ITaskGateway) =>
      new CreateTaskUseCase(taskGateway),
    inject: [ITaskGateway],
  },
];

const controllerProviders: Provider[] = [
  {
    provide: CreateTaskController,
    useFactory: (createTaskUseCase: CreateTaskUseCase) =>
      new CreateTaskController(createTaskUseCase),
    inject: [CreateTaskUseCase],
  },
];

@Module({
  imports: [],
  controllers: [TaskControllerRoute],
  providers: [
    ...persistenceProviders,
    ...useCaseProviders,
    ...controllerProviders,
  ],
})
export class TaskModule {}
