import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

import Swal from 'sweetalert2';
import { DrinkModel } from 'src/app/models/drink.model';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

  drink: DrinkModel = new DrinkModel();

  constructor(private routeActive: ActivatedRoute, 
            private router: Router,
            private apiService: ApiService) { }

  ngOnInit() {

    const id = this.routeActive.snapshot.paramMap.get('id');
    
    if( id==="" ){
      this.router.navigateByUrl('/');
    }else{

      Swal.fire({
        allowOutsideClick: false,
        //title: 'Are you sure?',
        text: 'Espere por favor...',
        icon: 'info'
      });
  
      Swal.showLoading();

      this.apiService.getDrink( id )
      .subscribe( resp => {
  
        if(Object.entries(resp).length === 0){
          // console.log("Direccionar");
          this.router.navigateByUrl('/');

        }else{
          this.drink = resp;
        }

       
        Swal.close();

        console.log(this.drink);

      }
      , (err: any)=>{
        
        this.router.navigateByUrl('/');
        
      }
      );

    }


  }

}
