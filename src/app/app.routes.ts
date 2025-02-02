import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'login', loadComponent:() => import('./pages/login/login.component')},
    {path:'register', loadComponent:() => import('./pages/register/register.component')},
    {path:'forget-password', loadComponent:() => import('./pages/forget-password/forget-password.component')},
    {path:'home', loadComponent:() => import('./pages/home/home.component')},
    {path:'user-edit', loadComponent:() => import('./pages/user-edit/user-edit.component')}    
];
