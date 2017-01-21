import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="main">
      <h1>Current Meals:</h1>
      <button (click)="newMeal()" class="newMeal">Add New Meal!</button>
      <new-meal *ngIf="newMealForm" (newMealSender)="addMeal($event)"></new-meal>
      <edit-meal [editMealForm]="editMealForm" (submitSender)=editDone($event)></edit-meal>
      <meal-list [childMealList]="meals" (editSender)="editMeal($event)"></meal-list>
    </div>
  `
})

export class AppComponent {

  meals: Meal[] = [
    new Meal('Rice', 'Just plain white rice with nothing on it', 250),
    new Meal('Kale', 'Just plain Kale with nothing on it', 100),
    new Meal('Beer', 'Good old PBR', 300),
    new Meal('Salad', 'Kale and Romaine salad with sunflower seeds', 250),
    new Meal('Pizza', 'A vegan slice of pizza', 800),
    new Meal('Ban Mhi', 'Tofu sandwhich', 700)
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

  editMeal(Meal) {
    this.editMealForm = Meal;
  }

  editDone(Meal) {
    this.editMealForm = null;
  }



}
