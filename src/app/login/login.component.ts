import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../data/user';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router:Router,
    private route:ActivatedRoute) { }
  email:FormControl;
  password:FormControl;
  user:User;
  ngOnInit(): void {
    this.email = new FormControl('',[Validators.required,Validators.email]);
    this.password = new FormControl('',[Validators.required]);
  }

  getErrorMessage():string
  {
    if (this.email.hasError('required'))
    {
      return "Email is a required field";
    }
    if(this.email.hasError('email'))
      return "Enter valid email";
  }
  
  login()
  {
    this.router.navigate(['expense-list']);
  }

}
