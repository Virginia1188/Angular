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
    editedTitle: string = '';
  
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

  update(){
   if(this.selectedTask){
    // this.selectedTask.title = this.editedTitle;
    this.taskService.update(this.selectedTask, this.editedTitle);
    this.selectedTask = undefined;
   }
  }

  cancel(){
    this.selectedTask = undefined;
  }


}
