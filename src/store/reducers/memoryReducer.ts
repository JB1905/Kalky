import {
  MEMORY_ADD,
  MEMORY_CLEAR,
  MEMORY_RECALL,
  MEMORY_STORE,
  MEMORY_SUBSTRACT,
} from '../actions';

const initialState = {
  items: [],
};

export const memoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MEMORY_CLEAR:
      return [];

    // case MEMORY_RECALL:
    //   return state[action.payload];

    case MEMORY_ADD:
      return { ...state, items: [...state.items, action.payload] };

    // case MEMORY_SUBSTRACT:
    //   return state.filter((item, index) => index !== action.payload);

    case MEMORY_STORE:
      return [];

    default:
      return state;
  }
};
