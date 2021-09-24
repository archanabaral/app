import * as type from "../types";

export const signin = (payload, history) => {
  return {
    type: type.REQUEST_SUBMIT,
    data: {payload, history}
  };
};
export const logout = () => {
  return {
    type: type.LOGOUT,
  };
};
