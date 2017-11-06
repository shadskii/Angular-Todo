import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos: any[];

  constructor(private todoService:TodoService) {
    // this.todos = ['Item1','Item2','Item3','Item4','Item5'];
   }

  ngOnInit() {
  }

}
