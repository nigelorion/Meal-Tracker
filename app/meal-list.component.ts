import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model'

@Component({
  selector: 'meal-list',
  template: `

    <div class="list">
      <div class="list__item" *ngFor="let meal of childMealList">
        <h3>{{meal.food}}</h3>
        <p>{{meal.description}}</p>
        <p>{{meal.calories}}</p>
      </div>
    </div>
    `
})

export class MealListComponent {

  @Input() childMealList: Meal[];

}
