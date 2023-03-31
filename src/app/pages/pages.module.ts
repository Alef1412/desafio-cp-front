import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './home/books/books.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { SummerSaleComponent } from './home/summer-sale/summer-sale.component';


@NgModule({
  declarations: [
    HomeComponent,
    BooksComponent,
    CategoriesComponent,
    SummerSaleComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
