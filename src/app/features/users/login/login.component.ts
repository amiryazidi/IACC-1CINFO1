import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email =  new FormControl('',[Validators.required, Validators.email])
  pwd = new FormControl('',[Validators.required,Validators.minLength(5)])

login = new FormGroup ({
  email : new FormControl('',[Validators.required, Validators.email]),
  pwd : new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]),
  cin : new FormControl('',[Validators.required,Validators.pattern('/^\d{8}$/')]),
  address : new FormControl('',[Validators.required,Validators.minLength(5)])
})


  save(){
    console.log(this.email)
  }
}
