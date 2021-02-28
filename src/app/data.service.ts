import { Injectable, OnInit } from '@angular/core';
import { TodoItem } from './todoItem';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  todoList: Array<TodoItem>;

  constructor(private http: HttpClient) {
    this.todoList = [];
  }

  getList (): void {

    const observer: Observable<any> = this.http.get('https://randomuser.me/api/?results=10');
    observer.subscribe((val)=>val.results.forEach(val=> {
      this.addTodo({
        text: val.name.first + ' ' + val.name.last,
        image: val.picture.thumbnail
      });
    }), err=>{if(err) throw new Error});

  }

  addTodo (item: TodoItem): void {
     this.todoList.unshift(item);
  }

  removeTodo (i: number): void {
    this.todoList.splice(i, 1)
  }



}
