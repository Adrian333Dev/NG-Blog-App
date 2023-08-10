import { Routes } from '@angular/router';
import { SignInComponent, SignUpComponent } from './components';

export const authRoutes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
];
