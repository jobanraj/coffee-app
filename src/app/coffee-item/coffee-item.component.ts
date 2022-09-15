import { Component, OnInit, Input } from '@angular/core';
import { Coffee } from '../model/coffee.model';

@Component({
  selector: 'app-coffee-item',
  templateUrl: './coffee-item.component.html',
  styleUrls: ['./coffee-item.component.scss']
})
export class CoffeeItemComponent implements OnInit {
  @Input() coffeeItem: Coffee;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
