import { NgModule } from '@angular/core';
import { Route, RouterModule  } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import { HomeSupportComponent } from './home-support/home-support.component';


const routes: Route[] = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {
    path:'home',
    component: Component1Component,
    children:[
      {path:'',redirectTo:'support',pathMatch:'full'},
      {path:'profile',component:HomeProfileComponent},
      {path:'support',component:HomeSupportComponent},
      {path:'**',component:PageNotFoundComponent},
    ]
  },
  {path:'page2',component: Component2Component},
  {path:'**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
