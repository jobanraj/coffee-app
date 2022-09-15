import { Coffee } from '../../model/coffee.model';
import * as CoffeeActions from '../actions/coffee.actions';

export interface State {
  coffees: Coffee[],
  loading: boolean,
  error: string
}

const initialState: State = {
  coffees: [],
  loading: false,
  error: ''
};

export function coffeeReducer(
  state: State = initialState,
  action: CoffeeActions.CoffeeActions
) {
  switch (action.type) {
    case CoffeeActions.GET_COFFEE:
      return {
        ...state,
        loading: true
      };
    case CoffeeActions.GET_COFFEE_SUCCESS:
      return {
        ...state,
        coffees: action.payload
      };
    case CoffeeActions.GET_COFFEE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
