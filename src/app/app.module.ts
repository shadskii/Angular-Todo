import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoaddComponent } from './todoadd/todoadd.component';
import { TodoService } from './todo.service';

import { MatSidenavModule } from '@angular/material';
import { MatListModule, MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatIconModule } from '@angular/material';


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
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
