import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../task.service';
// import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent {
  newTask: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    console.log(this.newTask);
    
    if (this.newTask.trim() !== '') {
      this.taskService.addTask(this.newTask.trim());
      this.newTask = '';
    }
  }
}
