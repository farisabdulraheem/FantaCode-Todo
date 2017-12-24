import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private fb: FormBuilder
  ) {
    this.todoForm = fb.group(
      {
        'Task': [null, Validators.required],
        'Description': "Deslfkljkm kdklf fkldfkl dkf dk"
      }
    );
  }

  OnCloseClicked() {
    this.close.emit();
  }

  OnFormSubmitted(e) {
    if(this.todoForm.valid) {
      console.log(this.todoForm.value);
      console.log("Form is Valid.");
    }
    else {
      for(let c in this.todoForm.controls) {
        this.todoForm.controls[c].markAsTouched();
      }
      console.log("Form is not valid.");
    }
  }
}

