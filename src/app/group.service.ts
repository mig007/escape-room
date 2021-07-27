import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GROUPS } from './mock-group-type';
import { GroupType } from './group-type';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  getGroups(): Observable<GroupType[]> {
    const retval = of(GROUPS);
    return retval;
  }
}
