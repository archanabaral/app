
import * as type from "../types";

const initialState = {
  loading: false,
  currentUser: {},
};
export const userSigninReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.REQUEST_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case type.REQUEST_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        currentUser: action.data,
      };
    case type.REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case type.LOGOUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
