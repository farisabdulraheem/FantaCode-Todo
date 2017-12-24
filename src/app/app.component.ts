import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show: Boolean = false;

  OnAddButtonClicked() {
    console.log("Add button is clicked.");
    this.show = true;
  }

  OnAddClosed() {
    this.show = false;
  }
}

