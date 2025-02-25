import { catchError } from 'rxjs';

import { Component, inject, OnInit, signal } from '@angular/core';

import { TodoItemComponent } from '../../components/todo-item/todo-item.component';
import { FetchStatus } from '../../models/fetch-status.type';
import { Todo } from '../../models/todo.type';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Todo[]>([]);
  status = signal<FetchStatus>('idle');

  ngOnInit(): void {
    this.status.set('loading');

    this.todoService
      .getTodos()
      .pipe(
        catchError((error) => {
          console.error(error);
          this.status.set('error');
          return [];
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });

    this.status.set('done');
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      });
    });
  }
}
