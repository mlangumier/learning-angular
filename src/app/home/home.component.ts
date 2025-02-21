import { Component, signal } from '@angular/core';

import { CounterComponent } from '../components/counter/counter.component';
import { DataBidingComponent } from '../components/data-biding/data-biding.component';
import { EventListenerComponent } from '../components/event-listener/event-listener.component';

@Component({
  selector: 'app-home',
  imports: [DataBidingComponent, EventListenerComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  welcomeMessage = signal('Welcome, dear visitor!');
}
