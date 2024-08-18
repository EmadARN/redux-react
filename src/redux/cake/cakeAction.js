import { BUY_CAKE } from "./cakeTypes";

export const buyCake = (value) => {
  return { type: BUY_CAKE, payload: value };
};
