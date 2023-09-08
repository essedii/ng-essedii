import { Action } from "@ngrx/store";

export enum ActionTypes {
  GET_GENERIC_DATA_LOADING = '[App] Get Generic Data Loading',
  GET_GENERIC_DATA_SUCCESS= '[App] Get Generic Data Success',
  GET_GENERIC_DATA_FAILURE = '[App] Get Generic Data Failure'
}

export class GetGenericDataLoading implements Action {
  readonly type = ActionTypes.GET_GENERIC_DATA_LOADING;
  constructor(public payload: any) {}
}

export class GetGenericDataSuccess implements Action {
  readonly type = ActionTypes.GET_GENERIC_DATA_SUCCESS;
  constructor(public payload: any) {}
}

export class GetGenericDataFailure implements Action {
  readonly type = ActionTypes.GET_GENERIC_DATA_FAILURE;
  constructor(public payload: any) {}
}

export type All = 
  | GetGenericDataLoading
  | GetGenericDataSuccess
  | GetGenericDataFailure