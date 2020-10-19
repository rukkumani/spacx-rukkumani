import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpacXlaunchComponent} from "./layout/spac-xlaunch/spac-xlaunch.component"


const routes: Routes = [
  {
    path:'',
    component:SpacXlaunchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
