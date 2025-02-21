import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  imports: [],
  templateUrl: './data-biding.component.html',
  styleUrl: './data-biding.component.scss',
})
export class DataBidingComponent {
  /** Get data from the parent component
   * Since the parent's data is set with `signal()` and sent to this child component,
   * we get the data using this "input" of type InputSignal (previously known as: @Input())
   */
  message = input(
    `Placeholder: Hello, world! (Data couldn't be passed from parent component)`
  );
}
