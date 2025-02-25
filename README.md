# Tutorial - Crash Course

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.8.

Tutorial from [Code With Ahsan](https://www.youtube.com/watch?v=oUmVFHlwZsI)

## Basics commands

- Create project: `ng new project-name`.
- Start local development server: `npm start` or `ng serve`, on port `http://localhost:4200/`
- Create components:
  - `ng generate component component-name`, or in short: `ng g c component-name`
  - `ng g c folder-name/component-name` to define the new component's path

Tips:

- Simulate any `ng` command by adding the `--dry-run` option at the end. It allows the command to run without committing to the changes (ex: check options for project creations, see what files are created while running a command)

## Data-binding

### Same component

How to pass data from the TS file to the HTML file, such as using variables and `signals` (new feature, equivalent to React's state).

With `signal()`, use `.set()` & `.update()` to modify the state.

### Parent to Child component

- From parent HTML: `<app-my-children-component [message]="welcomeMessage()" />`
- To child: `message = input<string>();` or `message = input.required<string>();` if the component cannot be displayed without the parent's data.

### Child to Parent component

From child component, simply signal the parent that a change is required on some data:

- Initialize a variable for the changing data: `toggleTodo = output<Todo>();`
- Then use `emit()` to signal the parent that a change is required: `handleIsCompleted() { this.toggleTodo.emit(this.todo()); }`

From the parent, get this `emit()` event (here, the event = changing the `todoItem`):
`<app-todo-item (toggleTodo)="updateTodoItem($event)" />`
Then update the data as usual.

## Events

Use event listeners to act on an event. There are many types of events (change, keypress, click, animation, drag & drop, copy & paste etc.).
Example: `<input (keyup)="keyUpHandler($event)" />`

## Routing

Setup routes in `app.routes.ts` to use the `<router-outlet />` to create a SPA.
Check the `header` component for info on setting up `routerLink` to navigate though the application & `routerActiveLink` to display the current active page.

## Services

Used to make HTTP calls and processing data.

- `ng g service services/my-service` -> create files, with the name `my-service.service` (convention).

A **service** can either be provided to the specific components it's imported in using `providers` in the component and removing the `providedIn: 'root'` option from the service, or can be accessible everywhere using by default.

In the components, using `ngOnInit` allows the data to be fetched on load and have suspense + fallbacks, and using `signal()` makes it easier to initialize and update the variables that get the data.

## HTTP calls

For that, we'll use the `httpClient()`.
We can use the `environments` folder to store our urls and call the variables in our HTTP calls.

## Directives

Add additional behaviour to elements in our apps (ex: components, html attributes, structural, etc.)

- `ng g directive directives/my-directive`

Example 1: `NgIf` is a native directive that allows conditional rendering
Example 2: to use our custom directive, we're using this `selector` (`appHighlightCompletedTodos`) directly inside the HTML of the component to modify for it to take effect.
