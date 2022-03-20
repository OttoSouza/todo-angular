import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Todos } from '../components/todos/entity/todos.entity';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todos[] = [];

  constructor(private http: HttpClient) {}

  addTodo(content: string): void {
    const newTodo = new Todos();
    Object.assign(newTodo, {
      content,
      completed: false,
    });
    this.todos.push(newTodo);
  }

  getTodos(): Todos[] {
    return this.todos;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((item, index) => index !== id);
  
  }

  // getAll() {
  //   return this.http
  //     .post('http://localhost:3000/auth/signin', {
  //       username: 'Otto',
  //       password: 'Otto123.',
  //     }).subscribe(res => console.log(res))

  // }
}
