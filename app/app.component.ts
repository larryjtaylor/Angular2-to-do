import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
  <h3>{{currentFocus}}</h3>
    <ul>
      <li *ngFor="let currentTask of tasks">{{currentTask.description}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('make this to-do list'),
    new Task('start another to-do list'),
    new Task('finish to-do lists'),
    new Task('destroy all to-do lists')
  ];
}

export class Task {
  public done: boolean = false;
  constructor(public description: string) { }
}
