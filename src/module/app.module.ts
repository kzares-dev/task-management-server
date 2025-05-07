import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from 'src/model/task.model';
import { ProjectSchema } from 'src/model/project.model';
import { TasksController } from 'src/controller/task.controller';
import { ProjectController } from 'src/controller/project.controller';
import { TasksService } from 'src/service/task.service';
import { ProjectService } from 'src/service/project.service';
import { env } from 'src/env'

@Module({
  imports: [
    
    MongooseModule.forRoot('mongodb://root:password@localhost:27017', { dbName: "task-management" }),
    // Models
    MongooseModule.forFeature([
      { name: "Task", schema: TaskSchema },
      { name: "Project", schema: ProjectSchema },
    ]),

  ],
  controllers: [TasksController, ProjectController],
  providers: [TasksService, ProjectService],
})
export class AppModule { }
