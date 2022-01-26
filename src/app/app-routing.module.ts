import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screen/home/home.component';
import { ReativeFormPageComponent } from './screen/reative-form-page/reative-form-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "reactive",
    component: ReativeFormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
