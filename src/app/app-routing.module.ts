import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then((m) => m.CoursesModule)
  },
  {
    path: 'coursesDetail',
    loadChildren: () => import('./courses-detail/courses-detail.module').then((m) => m.CoursesDetailModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule)
  },
  {
    path: 'advisor',
    loadChildren: () => import('./advisor/advisor.module').then((m) => m.AdvisorModule) 
  },
  {
    path: 'advisorDetail',
    loadChildren: () => import('./advisor-detail/advisor-detail.module').then((m) => m.AdvisorDetailModule) 
  },
  {
    path: 'formRegister',
    loadChildren: () => import('./form-register/form-register.module').then((m) => m.FormRegisterModule) 
  },
  {
    path: 'formLogin',
    loadChildren: () => import('./form-login/form-login.module').then((m) => m.FormLoginModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
