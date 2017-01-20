import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <form *ngIf="editMealForm">
      <label for="food">Food:</label>
      <input name="food" [(ngModel)]="editMealForm.food">
      <label for="description">Description:</label>
      <input name="description"[(ngModel)]="editMealForm.description">
      <label for="calories">Calories:</label>
      <input name="calories" [(ngModel)]="editMealForm.calories">
      <button type="button" (click)="editDone(meal)">Done</button>
    </form>

  `
})

export class EditMealComponent {

  @Input() editMealForm: Meal;
  @Output() submitSender = new EventEmitter;

  editDone(meal: Meal) {
    this.submitSender.emit(meal);
  }




}
