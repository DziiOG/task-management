import { Module } from '@nestjs/common'
import { TasksModule } from './modules/tasks/tasks.module'
import { TasksController } from './controllers/tasks/tasks.controller'
import { TasksService } from './services/tasks/tasks.service'
import { JoiPipeModule } from 'nestjs-joi'

@Module({
  imports: [TasksModule, JoiPipeModule],
  controllers: [TasksController],
  providers: [TasksService]
})
export class AppModule {}
