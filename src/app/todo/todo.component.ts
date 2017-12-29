import { Component, Input, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../services/todo.service';
import { Output } from '@angular/core/';

@Component({
  selector: 'app-todo-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() onTodoEdit: EventEmitter<Todo> = new EventEmitter<Todo>();

  show: boolean = false;
  public id: String;
  constructor(private todoService: TodoService) { }
  OnEditButtonClicked(todo: Todo) {
    this.onTodoEdit.emit(todo);
  }
  OnAddClosed() {
    this.show = false;
  }

}
