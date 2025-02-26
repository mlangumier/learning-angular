import { catchError } from 'rxjs';

import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TodoItemComponent } from '../../components/todo-item/todo-item.component';
import { Todo } from '../../models/todo.type';
import { FilterTodosPipe } from '../../pipes/filter-todos.pipe';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Todo[]>([]);
  searchTerm = signal<string>('');

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

  resetSearch() {
    this.searchTerm.set('');
  }
}
