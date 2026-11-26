import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Students } from './features/students/students';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'students', component: Students },
  { path: 'attendance', component: Dashboard },
  { path: 'courses', component: Dashboard },
  { path: 'classes', component: Dashboard },
  { path: 'exams', component: Dashboard },
  { path: 'fees', component: Dashboard },
  { path: 'reports', component: Dashboard },
  { path: '**', redirectTo: 'dashboard' },
];
