import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model'

@Component({
  selector: 'meal-list',
  template: `

  <select (change)="onChange($event.target.value)" class="select">
    <option value="allMeals" selected="selected">All Meals</option>
    <option value="highCalories">High Calorie Foods</option>
    <option value="lowCalories">Low Calorie Foods</option>

  </select>

    <div class="list">
      <div class="list__item" *ngFor="let meal of childMealList | calories:filter">
        <h3>{{meal.food}}</h3>
        <p class="list__item__description">{{meal.description}}</p>
        <p class="list__item__calories">Calories: <strong>{{meal.calories}}</strong></p>
        <button type="button" (click)="editMeal(meal)">Edit</button>
      </div>
    </div>
    `
})

export class MealListComponent {

  @Input() childMealList: Meal[];
  @Output() editSender = new EventEmitter;

  editMeal(meal: Meal) {
    this.editSender.emit(meal);
  }

  filter: string = "allMeals"

  onChange(option) {
    this.filter = option;
  }

}
