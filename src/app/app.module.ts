import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoaddComponent } from './todoadd/todoadd.component';
import { TodoService } from './todo.service';

import { MatListModule, MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoaddComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
