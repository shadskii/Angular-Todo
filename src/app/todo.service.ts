import { Injectable } from '@angular/core';
import { Observable } from 'rxJS/Observable';
import { BehaviorSubject } from 'rxJS/BehaviorSubject';
import { ToDo } from './data-model';

@Injectable()
export class TodoService {

  private _list: ToDo[] = [];
  private _observableList: BehaviorSubject<ToDo[]> = new BehaviorSubject([]);

  get observableList(): Observable<ToDo[]> {
    return this._observableList;
  }

  add(todo: ToDo){
    this._list.push(todo);
    this._observableList.next(this._list);
  }

  constructor() { }

}
