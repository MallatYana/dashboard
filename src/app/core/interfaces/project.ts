import { ProjectStatuses } from './project-statuses';

export interface Project {
  id: number;
  name: string;
  description?: string;
  status: ProjectStatuses;
}
