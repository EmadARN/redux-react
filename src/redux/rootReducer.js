import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import { milkReducer } from "./milk/milkReducer";
import userReducer from "./user/userReducer";
import postReducer from "./posts/postReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  milk: milkReducer,
  users: userReducer,
  posts: postReducer,
});
export default rootReducer;
