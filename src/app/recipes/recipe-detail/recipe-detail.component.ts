import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipes } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipes;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => { 
        this.id = +params['id'] 
        this.recipe= this.recipeService.getRecipe(this.id);}
    );
  }

  onAddToShoppingList(){
    this.recipeService.addIngerdientstoSlist(this.recipe.ingredients);
    this.router.navigate(['/shopping-list']);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(){
    if (this.authService.isAuthenticated()){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['./recipes']);
    }
  }
}
