import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    selectedTask: Task | undefined;
  
  constructor(public taskService: TaskService) {
    
  }

  completed(task:Task) {
    this.taskService.isCompleted(task);
  }

  deleteTask(task: Task){
    this.taskService.delete(task);
  }

  showEdit(task:Task){
    this.selectedTask = task;
  }

  edit(task:Task){
   
  }


}
