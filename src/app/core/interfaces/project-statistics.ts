import { Project } from './project';

export interface ProjectStatistics extends Project {
  tasksCompleted: number,
  tasksActive: number,
  tasksTotal: number,
  startDate: Date,
  endDate: Date,
  lastUpdateDate: Date,
}
