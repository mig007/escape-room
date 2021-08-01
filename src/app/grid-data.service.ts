import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GridData } from './grid-data';
import { GRID_DATA } from './mock-grid-data';

@Injectable({
  providedIn: 'root'
})
export class GridDataService {

  constructor() { }

  getData(): Observable<GridData[][]> {
    
    return of(GRID_DATA);
  }
}
