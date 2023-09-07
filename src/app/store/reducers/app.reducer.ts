
import { ActionTypes, All } from "../actions/app.actions";
import { IAppState, initialAppState } from "../state/app.state";



export function appReducer(state = initialAppState, action: All ): IAppState {
  switch(action.type) {
    case ActionTypes.GET_GENERIC_DATA_SUCCESS:
      return {
        ...state, 
        data: action.payload
      }
    default: {
      return state;
    }
  }
}