import { Component, OnInit } from '@angular/core';
import { Coffee } from '../model/coffee.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { getCoffee } from '../selectors/coffee.selector';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.scss']
})
export class CoffeeDetailComponent implements OnInit {

  coffee: any;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.route.params.subscribe(res => this.id = +res['id']);
  }

  ngOnInit() {
    this.store.select(getCoffee).pipe(
      map((state) => state.find((coffee, index) => {
        return index === this.id;
      }))
    ).subscribe((coffee: Coffee) => {
      this.coffee = coffee;
    })



    console.log(this.coffee)
  }

}
