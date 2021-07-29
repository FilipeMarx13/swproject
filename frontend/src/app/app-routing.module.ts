import { PeopleComponent } from './components/pages/people/people.component';
import { FilmeComponent } from './components/pages/filme/filme.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TesteComponent} from './components/pages/teste/teste.component'

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path:"filmes",
    component: FilmeComponent
  },
  {
    path:"people",
    component: PeopleComponent
  },
  {
    path:"teste",
    component: TesteComponent
  },
  // {
  //   path:"login",
  //   component: ProductCrudComponent
  // },
  // {
  //   path:"filmes",
  //   component: ProductCrudComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
