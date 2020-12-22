import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice.service';

@Component({
  selector: 'app-hobbicmp',
  template: `
    <p>
      hobbicmp works!
    </p>
    <h1>Service Component</h1>
  
  <ul *ngFor="let h of hobbies">
  <li>{{h.id}},{{h.name}},{{h.hobbie}}</li>
  
  </ul>

 
  `,
  styles: []
})
export class HobbicmpComponent implements OnInit {
  public hobbies=[];
  constructor(private _es: DataService) { }

  ngOnInit() {
    this.hobbies=this._es.getHobbies();
  }

}