import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  resetPasswordForm = new FormGroup({
    email: new FormControl('', Validators.required),
  });

  sent = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.auth.resetPassword(this.resetPasswordForm.controls.email.value);
    this.resetPasswordForm.reset();
    this.sent = true;
  }

  navToLoginPage(event: Event) {
    event.preventDefault();
    this.router.navigateByUrl('/login');
  }
}
