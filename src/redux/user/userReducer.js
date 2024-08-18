import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUESRT,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESRT:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { loading: false, error: "", users: action.payload };
    case FETCH_USERS_FAILURE:
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};
export default userReducer;
