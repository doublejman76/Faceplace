import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = false;
  error: string = null;

  authForm: FormGroup;

  onSwitchAuth() {
    this.isLoginMode = !this.isLoginMode;
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      passwordMatch: new FormGroup(
        {
          password: new FormControl(null, [
            Validators.required,
            Validators.minLength(6),
          ]),
          passwordConfirm: new FormControl(null),
        },
        this.passwordMatchValidator
      ),
    });
  }

  onSubmit() {
    let email = this.authForm.value.email;
    let password = this.authForm.value.passwordMatch.password;
    let authObservable: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObservable = this.authService.onSignin(email, password);
    } else {
      authObservable = this.authService.onSignup(email, password);
    }

    authObservable.subscribe(
      (responseData) => {
        this.router.navigate(['/home']);
      },
      (errorMessage) => {
        this.error = errorMessage;
      }
    );

    this.authForm.reset();
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value ||
      g.get('passwordConfirm').value === null
      ? null
      : { mismatch: true };
  }
}
