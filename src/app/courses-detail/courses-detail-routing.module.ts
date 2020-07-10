import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesDetailComponent } from './courses-detail.component';


const routes: Routes = [
  {
    path: '',
    component: CoursesDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesDetailRoutingModule { }
