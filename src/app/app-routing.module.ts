import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
