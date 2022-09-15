import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeComponent } from './coffee/coffee.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/coffee', pathMatch: 'full' },
  {
    path: 'coffee', component: CoffeeComponent
  },
  { path: 'coffee/:id', component: CoffeeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
