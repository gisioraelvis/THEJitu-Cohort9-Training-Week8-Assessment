import { createAction, props } from '@ngrx/store';
import { LoginUser, User } from 'src/app/Interfaces';

export const login = createAction(
  '[User] Login',
  props<LoginUser>()
);

export const loginSuccess = createAction(
  '[User] Login Success',
  props<{ user: any }>()
);

export const loginFailure = createAction(
  '[User] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');

export const register = createAction(
  '[User] Register',
  props<User>()
);

export const registerSuccess = createAction(
  '[User] Register Success',
  props<{ user: any }>()
);

export const registerFailure = createAction(
  '[User] Register Failure',
  props<{ error: string }>()
);

export const loadProfile = createAction('[User] Load User Profile');

export const loadProfileSuccess = createAction(
  '[User] Load User Profile Success',
  props<{ user: any }>()
);

export const loadProfileFailure = createAction(
  '[User] Load User Profile Failure',
  props<{ error: string }>()
);

export const updateProfile = createAction(
  '[User] Update Profile',
  props<{ user: any }>()
);

export const updateProfileSuccess = createAction(
  '[User] Update Profile Success',
  props<{ user: any }>()
);

export const updateProfileFailure = createAction(
  '[User] Update Profile Failure',
  props<{ error: string }>()
);
