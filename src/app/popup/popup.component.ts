import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-popup-root',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  todoForm: FormGroup;

  taskPlaceHolder = "Enter a Task";

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService
  ) {
    this.todoForm = fb.group(
      {
        'Task': [null, Validators.required],
        'Description': null
      }
    );
  }
  


  OnCloseClicked() {
    this.close.emit();
  }
     
  async OnFormSubmitted(values: Todo) {
    console.log(values);

    if(this.todoForm.valid) {
      console.log("Starting adding process.");
      try {
        await this.todoService.AddTodo(values);
        console.log("Successfully added.");
        this.close.emit();
        window.location.reload();
      }
      catch(e) {
        console.error("Some error occured while adding the todo: ", e);
      }
    }
    else {
      for(let c in this.todoForm.controls) {
        this.todoForm.controls[c].markAsTouched();
      }
      console.log("Form is not valid.");
    }
  }
}

