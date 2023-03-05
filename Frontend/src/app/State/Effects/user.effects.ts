import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import * as UserActions from '../Actions/user.actions';
import { LoginUser, User } from 'src/app/Interfaces';
import { AuthService } from 'src/app/Services/auth.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private auth: AuthService
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.login),
      mergeMap((action: LoginUser) => {
        const { Email, Password } = action;
        return this.authService.loginUser({ Email, Password }).pipe(
          map((successResponse: any) => {
            localStorage.setItem('token', successResponse.token);
            this.auth.isLoggedIn = true;
            return UserActions.loginSuccess({
              message: successResponse.message,
              token: successResponse.token,
              role: successResponse.role,
              name: successResponse.name,
            });
          }),
          catchError((error) =>
            of(UserActions.loginFailure({ error: error.message }))
          )
        );
      })
    );
  });

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.register),
      concatMap((action: User) => {
        const { Name, Email, Password } = action;
        return this.authService.registerUser({ Name, Email, Password }).pipe(
          map(() => {
            return UserActions.registerSuccess({
              message: 'User Registered Successfully',
            });
          }),
          catchError((error) =>
            of(UserActions.registerFailure({ error: error.message }))
          )
        );
      })
    );
  });

  updateProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.updateProfile),
      concatMap((action: User) => {
        const { Name, Email, Password } = action;
        return this.authService.updateProfile({ Name, Email, Password }).pipe(
          map(() => {
            return UserActions.updateProfileSuccess({
              message: 'User Profile Updated Successfully',
            });
          }),
          catchError((error) =>
            of(UserActions.updateProfileFailure({ error: error.message }))
          )
        );
      })
    );
  });
}
