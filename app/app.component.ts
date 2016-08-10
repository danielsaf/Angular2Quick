import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title = 'My First Angular 2 aApp';
  name = 'Daniel';
  wardsColor = 'red';
  customers = [
    {id: 1, name: 'Ward'},
    {id: 2, name: 'Kevin'},
    {id: 3, name: 'John'},
    {id: 4, name: 'Daniel'},
    {id: 5, name: 'Kate'}
    ];


  changeSuitColor(){
    this.wardsColor = this.wardsColor === 'red' ? 'blue' : 'red';
  }
}
