import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoService: TodoService;
  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  ngOnInit() {
  }

}
