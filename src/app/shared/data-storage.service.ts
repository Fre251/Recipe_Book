import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipes } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: Http,
   private recipeService: RecipeService,
   private authService: AuthService ) {}

  storeRecipes(){
    const token = this.authService.getToken();

    return this.http.put('https://recipebook-30080.firebaseio.com/recipes.json?auth=' + token,this.recipeService.getRecipes());
  }

  fetchRecipe(){
    const token = this.authService.getToken();

    this.http.get('https://recipebook-30080.firebaseio.com/recipes.json?auth=' + token).map(
      (response: Response) => {
        const recipes: Recipes[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    ).subscribe(
      (recipes: Recipes[]) => {
      this.recipeService.setRecipes(recipes);
      }
    );
  }

}
