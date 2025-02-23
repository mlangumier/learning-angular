import { catchError } from 'rxjs';

import { Component, inject, OnInit, signal } from '@angular/core';

import { Todo } from '../../models/todo.type';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Todo[]>([]);

  ngOnInit(): void {
    this.todoService
      .getTodos()
      .pipe(
        catchError((error) => {
          console.error(error);
          return [];
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }
}
