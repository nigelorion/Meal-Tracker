import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <form>
    <label for="food">Food:</label>
    <input #food>
    <label for="description">Description:</label>
    <input #description>
    <label for="calories">Calories:</label>
    <input #calories>
    <button type="button" (click)="submitMeal(food.value, description.value, calories.value)">Done</button>
  </form>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitMeal(food, description, calories) {
    var newMeal: Meal = new Meal(food, description, calories);
    this.newMealSender.emit(newMeal);
  }

}
