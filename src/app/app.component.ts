import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { AutofocusDirective } from './autofocus.directive';
import { DataService } from './data.service';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  todoItem: TodoItem;
  todoList: Array<TodoItem>;
  
  constructor(private ds: DataService) {
    this.todoList = ds.todoList;
    this.todoItem = {
      text: ''
    }
  }

  randomImage(): string {
    return `../assets/man${Math.floor(Math.random()*(4-1)+1)}.png`
  }
  
  submit (): void {
    this.ds.addTodo({
      text: this.todoItem.text,
      image: this.randomImage()
    });
  }
  
  delete (i: number): void {
    this.ds.removeTodo(i);
  }

  ngOnInit() { 

    this.ds.getList();
    
  }


  
}
