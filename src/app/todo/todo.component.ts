import { Component, Input, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../services/todo.service';
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-todo-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo : Todo;
@Output() event:EventEmitter<String>=new EventEmitter<String>();

 show: boolean = false;
 
 constructor(private todoService: TodoService) { }
  async OnEditButtonClicked(id: String){
    console.log("editbuttonclicked" + id);
     this.show = true;
     try {
      var s = await this.todoService.UpdateListTodo(id,this.todo);

      // // 
      
    }
    catch (e) {
      console.error("Some error occured while adding the todo: ", e);
    }
  }
  OnAddClosed() {
    this.show = false;
  }  
}
