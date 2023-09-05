import { AddAllData } from "./county-constants";

export const countryReducer = (state = [], action) => {
  switch (action.type) {
    case AddAllData: {
      return [...action.payload];
    }

    default: {
      return state;
    }
  }
};
