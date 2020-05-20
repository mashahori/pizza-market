import { addToCartAction, emptyCartAction, decreaseCountAction, increaseCountAction,
deleteItemtAction } from './actions';
import { pizzas } from '../utils';

export const initState = {
  items: pizzas,
  addedItems: [],
  total: 0,
  totalQuantity: 0,
  delivery: 5,
};

export const rootReducer = (state = initState, action) => {
   switch (action.type) {
    case addToCartAction.toString():
      let addedItem = state.items.find(item=> item.id === action.payload);
      let repitedItem = state.addedItems.find(item=> action.payload === item.id);
      if (repitedItem) {
        addedItem.quantity +=1;

        return {
          ...state,
          total: state.total + addedItem.price,
          totalQuantity: state.totalQuantity +=1,
        }
      } else {
        addedItem.quantity = 1;

        let newTotal = state.total + addedItem.price;

        return {
          ...state,
          addedItems: [ ...state.addedItems, addedItem],
          total: newTotal,
          totalQuantity: state.totalQuantity +=1,
        }
      };
    case emptyCartAction.toString():
      return {
        ...state,
        addedItems: [],
        total: 0,
        totalQuantity: 0,
      };
    case increaseCountAction.toString(): {
      let addedItem = state.addedItems.find(item=> item.id === action.payload);
      addedItem.quantity +=1;
      return {
        ...state,
        total: state.total + addedItem.price,
        totalQuantity: state.totalQuantity +=1,
      }
    };
    case decreaseCountAction.toString(): {
      let addedItem = state.addedItems.find(item=> item.id === action.payload);
      addedItem.quantity -=1;
      return {
        ...state,
        total: state.total - addedItem.price,
        totalQuantity: state.totalQuantity -=1,
      }
    };
    case deleteItemtAction.toString(): {
      let addedItem = state.addedItems.find(item=> item.id === action.payload);
      const index = state.addedItems.indexOf(addedItem);
      const restItems = [ ...state.addedItems.slice(0, index), ...state.addedItems.slice(index +1) ];
      return {
        ...state,
        addedItems: restItems,
        total: state.total - addedItem.price,
        totalQuantity: state.totalQuantity - addedItem.quantity,
      }
    };
    default:
      return state;
    }
};
