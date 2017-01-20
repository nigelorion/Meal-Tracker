import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="main">
      <div class="main__list">
      <p>Testing testing testing</p>
      <p>Meal list test</p>
      </div>
    </div>
  `
})

export class AppComponent {

  meal: Meal[] = [
    new Meal('Rice', 'Just plain white rice with nothing on it', '250')
  ];

}
