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

  isCompleted(task:Task): void {
    task.completed = !task.completed;
    
  }

  delete( task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  update(task: Task, title: string){
    const index = this.tasks.findIndex(t => t.title === task.title);
    if(index != -1){
      this.tasks[index].title = title;
    }
  }
}
