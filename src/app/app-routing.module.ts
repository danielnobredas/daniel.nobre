import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SociaisComponent } from './sociais/sociais.component';
import { fadeAnimation } from './shared/animations/fade.animation';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { page: 'home' }
  },
  {
    path: 'sociais',
    component: SociaisComponent,
    data: { page: 'sociais' }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
