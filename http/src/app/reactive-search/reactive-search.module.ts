import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveSearchRoutingModule } from './reactive-search-routing.module';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveSearchRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveSearchModule { }
