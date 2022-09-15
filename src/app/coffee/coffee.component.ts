import { Component, OnInit } from '@angular/core';
import { Coffee } from '../model/coffee.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { GetCoffeeAction } from '../store/actions/coffee.actions'
import { getCoffee } from '../selectors/coffee.selector';
@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {


  coffees$: Observable<Coffee[]>;
  coffees: Coffee[];
  page: number = 1;


  constructor(private store: Store<AppState>) {
    this.coffees$ = store.select(getCoffee);
  }

  ngOnInit() {
    this.store.dispatch(new GetCoffeeAction());
    console.log(this.coffees$);

  }
  ;

}
