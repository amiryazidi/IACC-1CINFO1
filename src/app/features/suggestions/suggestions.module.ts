import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { DetailSuggComponent } from './detail-sugg/detail-sugg.component';


@NgModule({
  declarations: [
    SuggestionsComponent,
    ListSuggestionComponent,
    DetailSuggComponent
  ],
  imports: [
    CommonModule,
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule { }
