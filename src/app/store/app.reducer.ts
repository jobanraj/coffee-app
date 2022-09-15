import { ActionReducerMap } from '@ngrx/store';
import * as fromCoffeeList from './reducers/coffee.reducer';

export interface AppState {
  coffeeList: fromCoffeeList.State;
}

export const appReducer: ActionReducerMap<any, any> = {
  coffeeList: fromCoffeeList.coffeeReducer,
};
