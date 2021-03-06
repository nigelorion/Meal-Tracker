import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { MealListComponent }  from './meal-list.component';
import { EditMealComponent }  from './meal-edit.component';
import { NewMealComponent }  from './new-meal.component';
import { CaloriesPipe } from './calories.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, EditMealComponent, NewMealComponent, MealListComponent, CaloriesPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
