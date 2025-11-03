import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor() { }

  cleanDate(date: string): Date {
    const [day, month, year] = date.split('.').map(Number);
    return new Date(year, month - 1, day);
  }

  databaseConnection = ['Stable', 'Unstable', 'Lost'];
}
