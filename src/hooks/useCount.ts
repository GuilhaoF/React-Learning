
import { useReducer } from "react";

type reducerState = {
  count: number;
};
type reducerAction = {
  type: string;
};

const initialState = { count: 0 };

const reducer = (state: reducerState, action: reducerAction) => {
  switch (action.type) {
    case "Add":
      return { ...state, count: state.count + 1 };
      break;
    case "Sub":
      return { ...state, count: state.count - 1 };
      break;
    case "Reset":
      return initialState;
      break;
  }
  return state;
};





export default function useCount(){
    return useReducer(reducer,initialState)
}