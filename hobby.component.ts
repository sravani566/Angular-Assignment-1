import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobby',
  template: `<h1>App Component</h1>
  <ul>
   <li *ngFor="let h of hobbies">{{ h.hobbie | mypipe:h.hobbie}}</li>
  </ul>,`,
  styles: []
  
  
})
export class HobbyComponent implements OnInit {
  hobbies: any[]=[
    {hobbie:'Dancing'},
    {hobbie:'Singing'},
    {hobbie:'Gardening'}
  
  ]

  constructor() { }

  ngOnInit() {
  }

}
