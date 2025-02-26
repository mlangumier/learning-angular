import { UpperCasePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { HighlightCompletedTodosDirective } from '../../directives/highlight-completed-todos.directive';
import { Todo } from '../../models/todo.type';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodosDirective, UpperCasePipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  /** This variable has 2 purposes:
   * - `input` method signals we're getting the data from the parent component (todos)
   * - `required` decorator signals that the data is required and the component won't work without it
   */
  todo = input.required<Todo>();

  //* `output()` allows us to signal the parent component that some modificationg is occuring on this data
  todoToggle = output<Todo>();

  handleIsCompleted() {
    this.todoToggle.emit(this.todo());
  }
}
