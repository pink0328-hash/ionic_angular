import { Routes } from '@angular/router';
// import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'email',
    loadComponent: () =>
      import('./email/email.page').then(m => m.EmailPage)
    // Temporarily disabled auth guard for demo mode
    // ...canActivate(() => redirectUnauthorizedTo(['login']))
  }
];