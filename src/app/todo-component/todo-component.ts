import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface TodoItem{
  id:number;
  task:string;
  completed:boolean;
}

@Component({
  selector: 'app-todo-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './todo-component.html',
  styleUrl: './todo-component.css'
})
export class TodoComponent {

  todoList:TodoItem[]=[];
  newTask:string='';

  addTask():void{
    if(this.newTask.trim()!==''){

      const newTodoItem:TodoItem={
        id:Date.now(),
        task:this.newTask,
        completed:false
      }

      this.todoList.push(newTodoItem)
      this.newTask='';
    }
  }

  toggleCompleted(index:number):void{
    this.todoList[index].completed =! this.todoList[index].completed
  }

  deleteTask(id:number){
    this.todoList=this.todoList.filter(item=>item.id !== id)
  }
}
