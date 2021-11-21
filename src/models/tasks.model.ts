/* eslint-disable no-unused-vars */
export interface Task {
  id: string
  description: string
  title: string
  status: TaskStatus
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}
