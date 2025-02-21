import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-event-listener',
  imports: [],
  templateUrl: './event-listener.component.html',
  styleUrl: './event-listener.component.scss',
})
export class EventListenerComponent {
  keyInfo = signal('');

  keyUpHandler(event: KeyboardEvent) {
    this.keyInfo.set(`Last key pressed: "${event.key}" key`);
  }
}
