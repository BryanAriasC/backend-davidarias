import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { DrinkModel } from 'src/app/models/drink.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formSearch: FormGroup;

  disabled_button = false;

  public filterTypes: Array<any> = [
            {'id': '', 'name':'--Todos--'},
            {'id': 'c', 'name':'Category'},
            {'id': 'g', 'name':'Glass'},
            {'id': 'i', 'name':'Ingredient'},
            {'id': 'a', 'name':'Alcoholic'}];

  swFilter = false; 

  contador = 0;

  public dataFilters: Array<any> = [];

  public drinks: Array<DrinkModel> = [];

  items = Array.from({length: 30}).map((_, i) => `Item #${i}`);

  constructor(private apiService: ApiService,
              private fb: FormBuilder) {
      
      this.disabled_button = false;
      
      this.createFormSearch();
      this.crearListenersSearch();
  }
  
  ngOnInit() {

  }

  createFormSearch(){
    this.formSearch = this.fb.group({
      filter        : ['', [] ],
      search        : ['', [ Validators.minLength(3) ]],
      select_search : ['', []]
    },{
      validators: this.validatorRequired('filter','search','select_search')
    });
  }

  validatorRequired(param: string, param1: string, param2: string){
  
    return ( formGroup : FormGroup ) =>{
      const filterControl = formGroup.controls[param];
      const searchControl = formGroup.controls[param1];
      const selectControl = formGroup.controls[param2];

      if( filterControl.value === ""){
        
        selectControl.setErrors(null);

        if(searchControl.value === ""){
          searchControl.setErrors({ noRequired: true });
        }else{
          searchControl.setErrors(null);
        }

      }else{
        searchControl.setErrors(null);
        
        if(selectControl.value === ""){
          selectControl.setErrors({ noMinimoCaracter: true });
        }else{
          selectControl.setErrors(null);
        }

      }

    };

  }

  campoNoValido(campo: string){
    return this.formSearch.get(campo).invalid && this.formSearch.get(campo).touched;
  }

  crearListenersSearch(){

    this.formSearch.get('filter').valueChanges.subscribe( val => {
      console.log(val);
    
      if( val === ''){
        this.swFilter = false;
      }else{
        this.swFilter = true;

        this.disabled_button = true;

        this.apiService.listFilters(val)
          .subscribe( (resp: any) => {   
            
              this.disabled_button = false;
              
              this.dataFilters = resp;

              this.dataFilters.unshift({
                id: '',
                name: '--Seleccione--',
                selected: true
              });
  
              this.formSearch.get('select_search').setValue(''); 

              console.log(this.dataFilters);

          });

      }

      

    });

  }


  
  search(){
    if(this.formSearch.invalid){
      return Object.values(this.formSearch.controls).forEach( control => {

          control.markAsTouched();
        
      });
    }
    
    this.disabled_button = true;

    Swal.fire({
      allowOutsideClick: false,
      //title: 'Are you sure?',
      text: 'Espere por favor...',
      icon: 'info'
    });

    Swal.showLoading();

    // console.log(this.formSearch.value);

    if(this.formSearch.value['filter'] === ''){
      this.apiService.searchGeneral(this.formSearch.value['search'])
      .subscribe( (resp: any) =>{
        this.drinks = resp;
        
        console.log(resp);

        this.contador = this.drinks.length; 
        
        this.disabled_button = false;

        Swal.close();
      });
    }else{
      this.apiService.searchFilter(this.formSearch.value['filter'],this.formSearch.value['select_search'])
      .subscribe( (resp: any) =>{
          this.drinks = resp;

          console.log(this.drinks);
        
          this.contador = this.drinks.length;

          this.disabled_button = false;

          Swal.close();

      });
    }


  }

}
