import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { HomeComponent } from './modules/home/home/home.component';
import { TrainingsComponent } from './modules/trainings/trainings/trainings.component';
import { authGuard } from './core/guards/auth.guard';
import { TourPackagesComponent } from './tour-experience/pages/tour-packages/tour-packages.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'trainings', component: TrainingsComponent, canActivate: [authGuard] },
  { path: 'tour-packages', component: TourPackagesComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
