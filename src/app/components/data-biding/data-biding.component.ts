import { Component, input } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  imports: [],
  templateUrl: './data-biding.component.html',
  styleUrl: './data-biding.component.scss',
})
export class DataBidingComponent {
  //* Get data from the parent component
  // Tip: since the parent's data is using a signal, this input is an InputSignal
  message = input('Greetings! (This is a default greeting message)');
}
