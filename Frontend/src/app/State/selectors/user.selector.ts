import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../appState';

export const selectAuthState = createFeatureSelector<AppState>('auth');

export const selectUser = createSelector(
  selectAuthState,
  (state: AppState) => state.user
);
