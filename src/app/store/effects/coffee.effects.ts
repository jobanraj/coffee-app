import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as CoffeeActions from '../actions/coffee.actions';
import { CoffeeService } from '../../services/coffee.service'
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class CoffeeEffects {
    constructor(private actions$: Actions, private coffeeService: CoffeeService) { }
    @Effect()
    getCoffee$ = this.actions$.pipe(
        ofType(CoffeeActions.GET_COFFEE),
        mergeMap(() => this.coffeeService.getCoffees().pipe(
            map((data) => {
                // console.log(data)
                return new CoffeeActions.GetCoffeeSuccessAction(data)
            }),
            catchError((error) => of(new CoffeeActions.GetCoffeeFailureAction(error))))
        )
    )

}