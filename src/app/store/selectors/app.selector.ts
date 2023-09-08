import { createFeatureSelector,createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";

export const appState = createFeatureSelector<IAppState>("appState");

export const appStateData = createSelector(appState, (state: IAppState)=> state.data)
export const appStateError = createSelector(appState, (state: IAppState)=> state.errors)