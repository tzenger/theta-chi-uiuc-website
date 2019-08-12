import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/modules/auth/auth.service';

export interface LoginFormValues {
  email: string;
  password: string;
  passwordRepeated: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {

    this.registerForm = this.formBuilder.group({
      email: '',
      password: '',
      passwordRepeated: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(values: LoginFormValues) {
    if (values.password === values.passwordRepeated) {
      // this.authService.registerUser(values.email, values.password);
      this.registerForm.reset();
    }
    console.log('Passwords do not match.');
  }
}
