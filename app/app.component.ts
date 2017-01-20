import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="main">
      <h1>Current Meals:</h1>
      <button (click)="newMeal()">Add New Meal!</button>
      <new-meal *ngIf="newMealForm" (newMealSender)="addMeal($event)"></new-meal>
      <meal-list [childMealList]="meals"></meal-list>
    </div>
  `
})

export class AppComponent {

  meals: Meal[] = [
    new Meal('Rice', 'Just plain white rice with nothing on it', '250'),
    new Meal('Kale', 'Just plain Kale with nothing on it', '100'),
    new Meal('Beer', 'Just good old PBR', '300')
  ];

  newMealForm = null;

  editMealForm = null;

  newMeal() {
    this.newMealForm = true;
  }

  addMeal(newMeal: Meal) {
    this.meals.push(newMeal);
    this.newMealForm = null;
  }



}
