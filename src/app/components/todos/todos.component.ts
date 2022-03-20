import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodosService } from 'src/app/services/todos.service';
import { Todos } from './entity/todos.entity';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit, DoCheck {
  todos: Todos[];
  formulario: FormGroup;
  inputTodo: string = '';

  constructor(private formBuilder: FormBuilder, private service: TodosService) {
    this.todos = this.service.getTodos();

    this.formulario = this.formBuilder.group({
      content: ['', [Validators.required]],
    });
  }
  

  ngOnInit(): void {}

  toggleDone(id: number): void {
    this.todos.forEach((item, index) => {
      if (index === id) {
        item.completed = !item.completed;
      }
      return item;
    });
  }

  delete(id: number): void {
    this.service.deleteTodo(id);
  }

  addTodo() {
    const value = this.formulario.value.content
    this.service.addTodo(value);
    this.formulario.reset();
  }

  ngDoCheck(): void {
    this.todos = this.service.getTodos();
  }

  
}
