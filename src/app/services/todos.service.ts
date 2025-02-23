import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '../../environments/environment.development';
import { Todo } from '../models/todo.type';

@Injectable({
  providedIn: 'root', // Means the service is available to the entire app
})
export class TodosService {
  http = inject(HttpClient);

  getTodos(): Observable<Todo[]> {
    const response = this.http.get<Todo[]>(`${environment.apiUrl}/todos`);
    return response;
  }
}
