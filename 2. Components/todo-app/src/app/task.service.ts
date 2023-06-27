import { Injectable } from '@angular/core';
import { Task } from 'src/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: string[] = [];
  
  addTask(task: string){
    this.tasks.push(task);
  }
}
