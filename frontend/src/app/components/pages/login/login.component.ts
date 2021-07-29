import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators,  FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  hide = true;
  
  
  constructor(private router: Router, private fb: FormBuilder) { }
  
  
  ngOnInit(): void { }
  
  onClick():void {
    console.log('Teste')
    this.router.navigate(["/home"]);
  }
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
