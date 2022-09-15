import { Action } from '@ngrx/store';
import { Coffee } from '../../model/coffee.model';

export const GET_COFFEE = '[Coffee] Get Coffee Action';
export const GET_COFFEE_SUCCESS = '[Coffee] Get Coffee Success Action';
export const GET_COFFEE_FAILURE = '[Coffee] Get Coffee Failure Action';


export class GetCoffeeAction implements Action {
  readonly type = GET_COFFEE;
}
export class GetCoffeeSuccessAction implements Action {
  readonly type = GET_COFFEE_SUCCESS;
  constructor(public payload: Coffee[]) { }
}
export class GetCoffeeFailureAction implements Action {
  readonly type = GET_COFFEE_FAILURE;
  constructor(public payload: string) { }
}

export type CoffeeActions =
  | GetCoffeeAction
  | GetCoffeeSuccessAction
  | GetCoffeeFailureAction;

