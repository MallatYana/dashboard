import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { ProjectStatistics } from '../interfaces/project-statistics';
import { ProjectStatisticsDirty } from '../interfaces/project-statistics-dirty';
import {HelperService} from "./helper.service";

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  constructor(
    private http: HttpClient,
    private helperService: HelperService
  ) { }

  getItems(): Observable<ProjectStatistics[]> {
    return this.http.get<ProjectStatisticsDirty[]>('../../../assets/mock-data/projects-data.json')
      .pipe(
        catchError(error => throwError(error)),
        delay(500),
        map(projects => projects.map(item => this.cleanProjectDate(item)))
      );
  }

  cleanProjectDate(item: ProjectStatisticsDirty): ProjectStatistics {
    const clearDate = {
      startDate: this.helperService.cleanDate(item.startDate),
      endDate: this.helperService.cleanDate(item.endDate),
      lastUpdateDate: this.helperService.cleanDate(item.lastUpdateDate),
    }
    return { ...item, ...clearDate };
  }
}
