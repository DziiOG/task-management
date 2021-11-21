import { Body, Controller, Get, Post, Param, Delete, Patch, Query } from '@nestjs/common'
import { TasksService } from 'src/services/tasks/tasks.service'
import { CreateTaskDto, GetTasksFilterDto } from 'src/validations/tasks.validation'
import { MiscDto } from 'src/validations/misc.validation'
import { Task } from 'src/models/tasks.model'

@Controller('tasks')
export class TasksController {
  private TasksService: TasksService
  constructor(private tasksService: TasksService) {
    this.TasksService = tasksService
  }

  @Get()
  getAllTasks(@Query() filter: GetTasksFilterDto): Task[] {
    if (Object.keys(filter).length) {
      return this.TasksService.getTasksWithFilters(filter)
    } else {
      return this.TasksService.getAllTasks()
    }
  }

  @Get('/:id')
  getTaskById(@Param() params: MiscDto): Task {
    const { id } = params
    return this.TasksService.getTaskById(id)
  }

  @Patch('/:id/status')
  updateTaskStatus(@Param() params: MiscDto, @Body() task: CreateTaskDto) {
    const { id } = params
    console.log(params, task)
    return this.TasksService.updateTaskStatus(id, task)
  }

  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDto) {
    return this.TasksService.createTask(createTaskDTO)
  }

  @Delete('/:id')
  deleteTaskById(@Param() params: MiscDto) {
    const { id } = params
    return this.TasksService.deleteTaskById(id)
  }
}
