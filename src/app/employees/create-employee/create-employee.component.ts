import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  employee = new Employee();

  constructor() {
    this.employee.gender = 'male';
    this.employee.contactPreference = 'phone';
  }

  ngOnInit(): void {}
  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm.value);
  }
}
