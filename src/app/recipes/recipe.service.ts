import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipes } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipes[]>();
  
  private recipes: Recipes[] = [
    new Recipes('Tomato Tango Pizza',
    'Super tasty tomato tango toped with green olives',
    'https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
    [
      new Ingredient('Tomato',2),
      new Ingredient('Olives',10),
      new Ingredient('Ketchup',1),      
    ]),
    new Recipes('Tripple Layer Chicken Burger',
    'One big 3 layer of chicken with extra cheesy',
    'https://4.bp.blogspot.com/-1c1nkTN641w/WiYqhtA008I/AAAAAAAA6kw/22KYgMVmkPs9n3BHKrfe5ao-N774b1QtwCLcBGAs/s1600/burger-king-bacon-king-jr.png',
    [
      new Ingredient('Chicken Boneless',2),
      new Ingredient('Cheese',10),
      new Ingredient('Lettuse',6),  
    ])
  ];
  constructor(private shoppingListService: ShoppingListService) { }

  setRecipes(recipes: Recipes[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngerdientstoSlist( ingredient: Ingredient[]){
    this.shoppingListService.addIngredients(ingredient);
  }

  addRecipe(recipe: Recipes){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

 updateRecipe(index: number, newRecipe: Recipes) {
   this.recipes[index] = newRecipe;
   this.recipesChanged.next(this.recipes.slice());
 }

 deleteRecipe(index: number){
   this.recipes.splice(index,1);
   this.recipesChanged.next(this.recipes.slice());
 }
}
