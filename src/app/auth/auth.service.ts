import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthUser } from './auth-user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn: boolean = false;

  private tokenExpirationTImer: any;

  user = new BehaviorSubject<AuthUser>(null);

  constructor(private http: HttpClient, private router: Router) {}

  // Sign Up!
  signUp(email: string, password: string) {
    return this.http
      .post<any>(
        'https://face-place-api.herokuapp.com/api/v1/users/create', {
          email: email,
          password: password
          })
  }

  // Sign In!
  signIn(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          environment.firebaseAPIKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          this.handleAuth(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn
          );
        })
      );
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new AuthUser(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationTime =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationTime);
    }
  }

  // Sign Out!
  signOut() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTImer) {
      clearTimeout(this.tokenExpirationTImer);
    }
    this.tokenExpirationTImer = null;
  }

  autoLogout(expirationTime: number) {
    this.tokenExpirationTImer = setTimeout(() => {
      this.signOut();
    }, expirationTime);
  }

  handleAuth(email: string, localId: string, token: string, expiresIn: number) {
    // Create expiration Date for Token
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    // Create a new user based on the info passed in and emit that user
    const user = new AuthUser(email, localId, token, expirationDate);
    this.user.next(user);

    // Set a new timer for expiration token
    this.autoLogout(expiresIn * 1000);

    // Save the new user to localStorage
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unkown error occurred.';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage =
          'There is already an account associated with this email address. Did you mean to sign in?';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage =
          'There is no account associated with this email address. Did you mean to sign up?';
        break;
      case 'INVALID_PASSWORD':
        errorMessage =
          'The password you entered was incorrect for this account. Please contact an administrator if you have forgotten your password.';
        break;
    }
    return throwError(errorMessage);
  }
}
