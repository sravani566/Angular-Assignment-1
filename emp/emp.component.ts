import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  employees: any[] = [
    { code: '101', name: 'Raj', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/6/1988'},
   
    {
   code: '102', name: 'Keshav', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982'},
    {
        code: '103', name: 'Gunika', gender: 'Female', annualSalary: 5900, dateOfBirth: '12/8/1979'},
    {
        code: '104', name: 'Ekta', gender: 'Female',annualSalary: 6500.826, dateOfBirth: '14/10/1980'}
] 
 constructor() { }

  ngOnInit() {
  }
}