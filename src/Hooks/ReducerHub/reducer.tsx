import {ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA} from './constants';

export interface Item {
  color: string;
  name: string;
  price: number;
}

export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  data: Item;
}

export interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  data: string; // assuming action.data is the name of the item to remove
}

export interface SetUserDataAction {
  type: typeof SET_USER_DATA;
  data: any; // update based on the actual type of user data
}

export type ActionTypes = AddToCartAction | RemoveFromCartAction | SetUserDataAction;

const initialState: Item[] = [];
export const reducer = (state = initialState, action: ActionTypes): Item[] => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];
    case REMOVE_FROM_CART:
      let result = state.filter(item => {
        return item.name != action.data;
      });
      return [...result];

    case SET_USER_DATA:
      return [...state, action.data];

    default:
      return state;
  }
};
