import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvisorDetailComponent } from './advisor-detail.component';


const routes: Routes = [
  {
    path: '',
    component: AdvisorDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvisorDetailRoutingModule { }
