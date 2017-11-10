import { Component, Inject, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToDo } from '../data-model';

@Component({
  selector: 'app-todoadd',
  templateUrl: './todoadd.component.html',
  styleUrls: ['./todoadd.component.css']
})
export class TodoaddComponent {

  todoForm: FormGroup;

  constructor(
    @Inject(FormBuilder) fb: FormBuilder,
    private todoService: TodoService) {
    this.todoForm = fb.group({
      description: ''
    });
  }

  public submitTodo() {
    this.todoService.add(new ToDo(this.todoForm.controls['description'].value));
    this.todoForm.controls['description'].setValue('');
  }
}
