import { BUY_MILK } from "./milkTypes";

const initialState = {
  numOfmilk: 10,
};
export const milkReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_MILK:
      return { ...state, numOfmilk: state.numOfmilk - action.payload };
    default:
      return state;
  }
};
