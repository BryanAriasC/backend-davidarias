import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { DrinkComponent } from './components/drink/drink.component';


const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'drink/:id', component: DrinkComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
