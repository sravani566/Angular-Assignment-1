import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  getHobbies() {
    return [{"id": 1,"name": "Pooja","hobbie":"Dancing" },
   {"id": 2,"name": "Sravani","hobbie":"Singing"},
   {"id": 3,"name": "Teja Koganti","hobbie":"Gardening"}
      ];
 
     }
 }