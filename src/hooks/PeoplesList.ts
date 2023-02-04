import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
type Person = {
  id: string;
  name: string;
};
type ActionType = {
  type: string;
  payload?: {
    name?: string;
    id?: string;
  };
};

const initialState: Person[] = []; //estado = array de person vazio
const reducer = (state: Person[], action: ActionType) => {
  switch (action.type) {
    case "Add":
      if (action.payload?.name) {
        const newState = [...state]
        newState.push({
          id: uuidv4(),
          name: action.payload?.name,
        });
        return newState
    
      }
      break;
    case "Del":
      if (action.payload?.id) {
        state = state.filter((item) => item.id !== action.payload?.id);
      }
      break;
    case "Order":
      state = state.sort((a, b) => (a.name > b.name ? 1 : -1));
      break;
  }
  return state;
};

export function usePeopleList() {
  return useReducer(reducer, initialState);
}
