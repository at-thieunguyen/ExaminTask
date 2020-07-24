import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormRegisterComponent } from './form-register.component';


const routes: Routes = [
  {
    path: '',
    component: FormRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRegisterRoutingModule { }
