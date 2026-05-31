// =====================================
// ORIGINAL app.ts (Angular Generated)
// =====================================

// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('my-first-app');
// }


// =====================================
// EXPERIMENT 3
// Data Binding
// =====================================

/*

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
 selector: 'app-root',
 imports: [FormsModule],
 templateUrl: './app.html',
 styleUrl: './app.css'
})
export class App {

 url =
 'https://angular.io/assets/images/logos/angular/angular.png';

 name = '';

 showMessage() {
   console.log('Hello World');
 }
}

*/


// =====================================
// EXPERIMENT 4
// Form Validation
// =====================================

/*

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
 selector: 'app-root',
 standalone: true,
 imports: [CommonModule, FormsModule],
 templateUrl: './app.html',
 styleUrl: './app.css'
})
export class App {

 name = '';
 email = '';

}

*/


// =====================================
// EXPERIMENT 5
// Structural Directives
// =====================================

/*

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-root',
 standalone: true,
 imports: [CommonModule],
 templateUrl: './app.html',
 styleUrl: './app.css'
})
export class App {

 showDiv = true;

 fruits = [
   'Apple',
   'Mango',
   'Banana',
   'Orange'
 ];

 color = 'blue';

}

*/


// =====================================
// EXPERIMENT 6
// Routing
// =====================================

/*

import { Component } from '@angular/core';
import {
 RouterOutlet,
 RouterLink
} from '@angular/router';

@Component({
 selector: 'app-root',
 standalone: true,
 imports: [
   RouterOutlet,
   RouterLink
 ],
 templateUrl: './app.html',
 styleUrl: './app.css'
})
export class App {}

*/


// =====================================
// EXPERIMENT 7
// Service
// =====================================



import { Component } from '@angular/core';
import { DataService } from './data';

@Component({
 selector: 'app-root',
 standalone: true,
 imports: [],
 templateUrl: './app.html',
 styleUrl: './app.css'
})
export class App {

 message = '';

 constructor(private ds: DataService) {

   this.message =
   this.ds.getMessage();

 }

}

