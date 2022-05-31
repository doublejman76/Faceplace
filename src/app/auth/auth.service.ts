import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { User } from '../shared/user.model';
import { environment } from 'src/environments/environment';
import { AuthUser } from './auth-user.model';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

const SIGN_UP_URL =
  'https://face-place-api.herokuapp.com/api/v1/users/create';
const SIGN_IN_URL =
  'https://face-place-api.herokuapp.com/api/v1/users/login';

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
  private tokenExpirationTImer: any;
  userToken: string = null;
  currUser = new BehaviorSubject<AuthUser>(null);
  loadedUser: any;

  constructor(private http: HttpClient, private router: Router) {}

  // Sign Up!
  signUp(email: string, password: string) {
    return this.http
      .post<any>(SIGN_UP_URL, {
          email: email,
          password: password
          })
  }

  // Sign In!
  signIn(email: string, password: string) {
    return this.http
      .post<any>(SIGN_IN_URL,
        {
          email: email,
          password: password,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
        // Use "object destructuring" to get access to all response values
        const {email, id} = responseData.payload.user
        const {expiry, value} = responseData.payload.token
        const expiresIn = new Date(expiry).getTime() - Date.now()
        // Pass the response values into handleAuth method
        this.handleAuth(email, id, value, expiresIn);
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
      this.currUser.next(loadedUser);
      const expirationTime =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationTime);
    }
  }

  // Sign Out!
  signOut() {
    this.currUser.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTImer) {
      clearTimeout(this.tokenExpirationTImer);
    }
    this.tokenExpirationTImer = null;
  }

  // Auto Sign In
  autoSignIn() {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (!userData) return;

    const { email, id, _token, _tokenExpirationDate } = userData;

    const loadedUser = new User(
      userData.name,
      userData.email,
      userData.id,
      userData.posts,
      userData.imagePath,
      userData.bio,
      userData._token,
      new Date(_tokenExpirationDate)
    );

    if (this.loadedUser.token) {
      this.currUser.next(this.loadedUser);

      const expDur =
        new Date(_tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expDur);
    }
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
    this.currUser.next(user);

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
function idToken(email: string, localId: any, idToken: any, arg3: number) {
  throw new Error('Function not implemented.');
}

