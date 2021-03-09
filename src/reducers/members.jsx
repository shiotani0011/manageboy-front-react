import { REQUEST_STATE } from "../constants";

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  membersList: [],
};

export const membersActionTyps = {
  FETCHING: "FETCHING",
  FETCH_SUCCESS: "FETCH_SUCCESS",
};

export const membersReducer = (state, action) => {
  switch (action.type) {
    case membersActionTyps.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case membersActionTyps.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        membersList: action.payload.members,
      };
    default:
      throw new Error();
  }
};
