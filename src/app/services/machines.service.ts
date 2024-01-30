import { Injectable } from '@angular/core';
import { Machine } from '../models/machine.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MachinesService {
  baseApiUrl: string = 'https://localhost:7150';

  constructor(private http: HttpClient) {}

  getAllMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.baseApiUrl + '/api/machines');
  }

  addMachine(newMachine: Machine): Observable<Machine> {
    newMachine.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Machine>(
      this.baseApiUrl + '/api/machines',
      newMachine
    );
  }

}
