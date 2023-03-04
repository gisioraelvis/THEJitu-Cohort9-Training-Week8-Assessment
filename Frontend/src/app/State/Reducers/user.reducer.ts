import { createReducer, createSelector, on } from '@ngrx/store';
import { User } from 'src/app/Interfaces';
import {
  loadProfile,
  loginFailure,
  loginSuccess,
  logout,
  registerSuccess,
  updateProfileSuccess,
} from '../Actions/user.actions';

export interface UserState {
  loggedInUser: User | null;
}

export const initialState: UserState = {
  loggedInUser: null,
};

export const userReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({ ...state, loggedInUser: user })),
  on(loginFailure, (state, { error }) => ({ ...state, error })),
  on(registerSuccess, (state, { user }) => ({ ...state, loggedInUser: user })),
  on(loadProfile, (state) => ({ ...state, loggedInUser: state.loggedInUser })),
  on(updateProfileSuccess, (state, { user }) => ({
    ...state,
    loggedInUser: user,
  })),
  on(logout, (state) => ({ ...state, initialState }))
);
