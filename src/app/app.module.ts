import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsFilterPipe } from './pipes/products-filter.pipe';
import { StarComponent } from './components/shared/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsFilterPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
