import { ActionTypes } from "../constants/action-types";
const initialState = {
  data: [],
};


export const countryDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_BAG:
      return { ...state, data: payload.data.data };
    default:
      return state;
  }
};
