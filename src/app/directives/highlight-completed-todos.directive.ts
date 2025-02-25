import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodos]',
})
export class HighlightCompletedTodosDirective {
  isCompleted = input<boolean>(false);
  el = inject(ElementRef);

  constructor() {}

  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
    }
  });
}
