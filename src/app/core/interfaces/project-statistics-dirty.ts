import { Project } from './project';

export interface ProjectStatisticsDirty extends Project {
  tasksCompleted: number,
  tasksActive: number,
  tasksTotal: number,
  startDate: string,
  endDate: string,
  lastUpdateDate: string,
}
