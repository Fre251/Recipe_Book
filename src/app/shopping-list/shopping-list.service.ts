import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientschnage = new Subject<Ingredient[]>();
  startediting = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Mangoes',10)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addIngredient(newIngredient: Ingredient){
    this.ingredients.push(newIngredient);
    this.ingredientschnage.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientschnage.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newingredient: Ingredient){
    this.ingredients[index] = newingredient;
    this.ingredientschnage.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index,1);
    this.ingredientschnage.next(this.ingredients.slice());
  }

}
