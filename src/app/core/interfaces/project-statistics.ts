import { ProjectStatuses } from './project-statuses';

export interface ProjectStatistics {
  id: number,
  name: string,
  tasksCompleted: number,
  tasksActive: number,
  tasksTotal: number,
  startDate: Date,
  endDate: Date,
  lastUpdateDate: Date,
  projectStatus: ProjectStatuses;
  projectDescription?: string;
}
