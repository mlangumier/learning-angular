import { Component, computed, signal } from '@angular/core';

import { CounterComponent } from '../../components/counter/counter.component';
import { DataBidingComponent } from '../../components/data-biding/data-biding.component';
import { EventListenerComponent } from '../../components/event-listener/event-listener.component';

@Component({
  selector: 'app-home',
  imports: [DataBidingComponent, EventListenerComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  welcomeMessage = signal<string>('Welcome, dear visitor!');

  //* Read-only computed expression (for HTML)
  welcomeMessageCapitalized = computed(() =>
    this.welcomeMessage().toUpperCase()
  );
}
