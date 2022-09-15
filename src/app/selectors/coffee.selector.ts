import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../store/reducers/coffee.reducer';

const getCoffeeState = createFeatureSelector<State>('coffeeList');

export const getCoffee = createSelector(getCoffeeState, (coffees => {
    console.log(coffees)
    return coffees.coffees;
}))