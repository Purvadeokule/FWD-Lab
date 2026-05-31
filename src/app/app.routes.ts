// ======================================
// ORIGINAL app.routes.ts (Angular Default)
// ======================================

import { Routes } from '@angular/router';

export const routes: Routes = [];


// ======================================
// EXPERIMENT 6 : ROUTING
// Replace above code with below code
// ======================================

/*

import { Routes } from '@angular/router';

import { First } from './first/first';
import { Second } from './second/second';

export const routes: Routes = [
  {
    path: 'first',
    component: First
  },
  {
    path: 'second',
    component: Second
  },
  {
    path: '',
    redirectTo: 'first',
    pathMatch: 'full'
  }
];

*/


// ======================================
// NOTE
// For Experiment 6:
// 1. Create components:
//    ng generate component first
//    ng generate component second
//
// 2. Uncomment the above routing code
//    and replace the default routes.
//
// 3. After experiment completion,
//    restore the original code:
//
//    export const routes: Routes = [];
//
// ======================================