import { Injectable, NotFoundException } from '@nestjs/common'
import { Task, TaskStatus } from 'src/models/tasks.model'
import { CreateTaskDto, GetTasksFilterDto } from 'src/validations/tasks.validation'
import { v1 as uuid } from 'uuid'

@Injectable()
export class TasksService {
  private tasks: Task[] = []

  getAllTasks(): Task[] {
    return this.tasks
  }

  createTask(createTaskDTO: CreateTaskDto): Task {
    const { title, description } = createTaskDTO

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN
    }
    this.tasks.push(task)

    return task
  }

  getTasksWithFilters(filters: GetTasksFilterDto): Task[] {
    let tasks = this.getAllTasks()

    Object.keys(filters).map(key => {
      tasks = tasks.filter(item => {
        if (key === 'status' && item.status === filters[key]) {
          return item
        } else if (
          item.title.toLowerCase().includes(filters[key].toLowerCase()) ||
          item.description.toLowerCase().includes(filters[key].toLowerCase())
        ) {
          return item
        }
      })
    })

    return tasks
  }

  updateTaskStatus(id: string, task: Partial<Task>) {
    const taskToBeUpdated = this.getTaskById(id)

    Object.keys(task).map(key => {
      taskToBeUpdated[key] = task[key]
    })

    return taskToBeUpdated
  }

  getTaskById(id: string): Task {
    const found = this.tasks.find(task => task.id === id)

    if (!found) throw new NotFoundException(`Task with ID ${id} was not found`)

    return found
  }

  deleteTaskById(id: string) {
    const found = this.getTaskById(id)
    this.tasks = this.tasks.filter(task => task.id !== found.id)
    return found
  }
}
