import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authObsrv: Observable<AuthResponseData>;
  errMsg: string = null;
  msg:string = null;

  isLoginMode: boolean = true;

  authForm: FormGroup;

  onSwitchAuthMode() {
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

    // Conditional statement to see what mode we are in
    if (this.isLoginMode) {
      // Sign In Logic
      authObservable = this.authService.signIn(email, password);
    } else {
      // Sign Up Logic
      authObservable = this.authService.signUp(email, password);
    }

    // Observable Logic with Error Handling
    authObservable.subscribe(
      (responseData) => {
        console.log('AUTH RESPONSE SUCCESS:', responseData);
        if (this.errMsg) this.errMsg = null;
        this.router.navigate(['/home']);
      },
      (errorMessage) => {
        this.errMsg = errorMessage;
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
