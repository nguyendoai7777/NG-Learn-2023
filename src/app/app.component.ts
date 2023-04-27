import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'v-newest';
  show = false;
  items = ['tab 1', 'tab 2', 'tab 3', 'tab 4', 'tab 5', 'tab 6'];
  ngOnInit() {

  }
}
