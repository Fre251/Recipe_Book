import { Component } from "@angular/core";
import { Response } from "@angular/http";
import { Router } from "@angular/router";

import { DataStorageService } from "../../shared/data-storage.service";
import { AuthService } from "../../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent{

constructor(private dataService: DataStorageService,
            private authService: AuthService,
            private router: Router){}

onSaveData(){
    this.dataService.storeRecipes().subscribe(
        (response: Response) => {console.log(response);}
    );
}
onFetchData(){
    this.dataService.fetchRecipe();
}
onLogout(){
    this.authService.logout();
    this.router.navigate(['./recipes']);
}
isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}