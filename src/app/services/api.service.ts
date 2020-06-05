import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DrinkModel } from 'src/app/models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  public data: Array<DrinkModel> = [];

  public drink: DrinkModel = new DrinkModel();
  
  getDrink( id: string ){
    return this.http.get(`${ this.url }/lookup.php?i=${ id }`).pipe(
      map( (resp: any) => {
        
        if(resp.drinks){
          this.drink.id = resp.drinks[0]['idDrink'];
          this.drink.name = resp.drinks[0]['strDrink'];
          this.drink.url_image = resp.drinks[0]['strDrinkThumb'];
          this.drink.instructions = resp.drinks[0]['strInstructions'];
          this.drink.alcoholic = resp.drinks[0]['strAlcoholic'];
          this.drink.category = resp.drinks[0]['strCategory'];
          this.drink.glass = resp.drinks[0]['strGlass'];
          
          let arrIng = [];

          for (let i = 1; i < 15; i++) {
            
            if(resp.drinks[0]['strIngredient'+i]){
              arrIng.push(resp.drinks[0]['strIngredient'+i]);
            }
  
          }

          this.drink.arr_ingredients = arrIng;

        }

        // this.data = [];
        return this.drink;

      })
    );
  }

  searchGeneral(param: string){
    return this.http.get(`${ this.url }/search.php?s=${ param }`).pipe(
      map( (resp: any) => {
        
        let datadrinks: Array<DrinkModel> = [];

        if(resp.drinks){
          resp.drinks.forEach(elm => {
   
            let drinkarr = new DrinkModel();
            drinkarr.id = elm['idDrink'];
            drinkarr.name = elm['strDrink'];
            drinkarr.url_image = elm['strDrinkThumb']+'/preview';

            datadrinks.push(drinkarr);

          });
        }
    
        return datadrinks;          

      })
    );
  }

  searchFilter(filter:string, param: string){
    return this.http.get(`${ this.url }/filter.php?${ filter }=${ param }`).pipe(
      map( (resp: any) => {
        
        this.data = [];

        if(resp.drinks){
          resp.drinks.forEach(elm => {

            let drinkarr = new DrinkModel();
            drinkarr.id = elm['idDrink'];
            drinkarr.name = elm['strDrink'];
            drinkarr.url_image = elm['strDrinkThumb']+'/preview';

            this.data.push(drinkarr);
        });
        }

        return this.data;    

      })
    );
  }

  listFilters(filter: string){
    return this.http.get(`${ this.url }/list.php?${ filter }=list`).pipe(
      map( (resp: any) => {
        
        // this.data = [];   
        return this.returnResult( filter ,resp.drinks);

      })
    );
  }


  returnResult(filter: string,drinks : Array<any>){

    this.data = [];

    if(filter === 'c'){
      drinks.forEach(elm => {

        let drinkarr = new DrinkModel();
        drinkarr.id = elm['strCategory'].replace(' ','_');
        drinkarr.name = elm['strCategory'];
        drinkarr.selected = false;

        this.data.push(drinkarr);
    });
    }

    if(filter === 'g'){
      drinks.forEach(elm => {

        let drinkarr = new DrinkModel();
        drinkarr.id = elm['strGlass'].replace(' ','_');
        drinkarr.name = elm['strGlass'];
        drinkarr.selected = false;

        this.data.push(drinkarr);

    });
    }

    if(filter === 'i'){
      drinks.forEach(elm => {
        
        let drinkarr = new DrinkModel();
        drinkarr.id = elm['strIngredient1'].replace(' ','_');
        drinkarr.name = elm['strIngredient1'];
        drinkarr.selected = false;

        this.data.push(drinkarr);

    });
    }

    if(filter === 'a'){
      drinks.forEach(elm => {
        let drinkarr = new DrinkModel();
        drinkarr.id = elm['strAlcoholic'].replace(' ','_');
        drinkarr.name = elm['strAlcoholic'];
        drinkarr.selected = false;

        this.data.push(drinkarr);
    });
    }

   return this.data;

  }

}
