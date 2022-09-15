import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { EffectsModule } from '@ngrx/effects';
import { NgxPaginationModule } from 'ngx-pagination';
import { CoffeeEffects } from './store/effects/coffee.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CoffeeItemComponent } from './coffee-item/coffee-item.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component'


@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    CoffeeItemComponent,
    CoffeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([CoffeeEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
