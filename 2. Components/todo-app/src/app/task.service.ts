import { Injectable } from '@angular/core';
import { Task } from 'src/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [];
  
  addTask(task: string){
   
    if (task.trim() !== '') {

      const newTask: Task ={
        title: task.trim(),
        completed: false
      }
     
      this.tasks.push(newTask);
    }
  
  }

  isCompleted(task:Task) {
    task.completed = !task.completed;
    
  }
}
