import { JoiSchema, JoiSchemaOptions, CREATE, UPDATE } from 'nestjs-joi'
import * as Joi from 'joi'
import { TaskStatus } from 'src/models/tasks.model'

@JoiSchemaOptions({
  allowUnknown: false
})
export class CreateTaskDto {
  @JoiSchema([CREATE], Joi.string().required())
  title: string

  @JoiSchema([CREATE], Joi.string().required())
  description: string

  @JoiSchema(
    [UPDATE],
    Joi.string().valid(TaskStatus.DONE, TaskStatus.OPEN, TaskStatus.IN_PROGRESS).required()
  )
  status: TaskStatus
}

@JoiSchemaOptions({
  allowUnknown: false
})
export class GetTasksFilterDto {
  @JoiSchema(Joi.string().valid(TaskStatus.DONE, TaskStatus.OPEN, TaskStatus.IN_PROGRESS))
  status: TaskStatus

  @JoiSchema(Joi.string())
  search: string
}
