import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent {
  taskInput: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    console.log(this.taskInput);
    const newTask = this.taskInput.trim();
    if (newTask !== '') {
      this.taskService.addTask(newTask);
      this.taskInput = '';
    }
  }
}
