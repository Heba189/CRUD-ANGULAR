import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Employee } from '../../models/employee.model';
import { Department } from '../../models/department.model';
import { BsDatepickerConfig } from 'node_modules/ngx-bootstrap/datepicker';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto =false;
  BsDatepickerConfig:Partial<BsDatepickerConfig>; 
  employee = new Employee();
  departments :Department[]=[
    {id:1 , name:'Hr'}, 
    {id:2 , name:'Frontend'},
    {id:3 , name:'Backend'},
    {id:4 , name:'Manager'},
    {id:5 , name:'Admin'}

  ];
  constructor() {
    this.employee.gender = 'male';
    this.employee.contactPreference = 'phone';
    this.employee.isActive =true;

    this.BsDatepickerConfig =Object.assign({},
  {containerClass :'theme-dark-blue',
     showWeekNumbers:false });
  }
  TogglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }
  ngOnInit(): void {}
  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm.value);
  }
}
