// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class Data {}

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getMessage() {
    return "Hello from Angular Service";
  }
}

