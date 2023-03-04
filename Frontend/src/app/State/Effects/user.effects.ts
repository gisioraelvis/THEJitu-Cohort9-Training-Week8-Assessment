import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import * as UserActions from '../Actions/user.actions';
import { LoginUser, User } from 'src/app/Interfaces';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthenticationService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      mergeMap((user: LoginUser) =>
        this.authService.loginUser(user).pipe(
          map((user) => UserActions.loginSuccess({ user })),
          catchError((error) => of(UserActions.loginFailure({ error })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.register),
      mergeMap((user: any) =>
        this.authService.registerUser(user).pipe(
          map((user) => UserActions.registerSuccess({ user })),
          catchError((error) => of(UserActions.registerFailure({ error })))
        )
      )
    )
  );

  updateProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateProfile),
      mergeMap((user: any) =>
        this.authService.updateProfile(user).pipe(
          map((user) => UserActions.updateProfileSuccess({ user })),
          catchError((error) => of(UserActions.updateProfileFailure({ error })))
        )
      )
    )
  );
}
