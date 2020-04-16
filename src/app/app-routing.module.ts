import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EplistComponent } from './eplist/eplist.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {
    path:'',
    component:EplistComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
