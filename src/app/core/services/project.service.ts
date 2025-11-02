import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectStatistics } from '../interfaces/project-statistics';
import { catchError, delay, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  constructor(private http: HttpClient) { }

  getItems(): Observable<ProjectStatistics[]> {
    return this.http.get<ProjectStatistics[]>('../../../assets/mock-data/projects-data.json')
      .pipe(
        catchError(error => throwError(error)),
        delay(500),
      );
  }
}
