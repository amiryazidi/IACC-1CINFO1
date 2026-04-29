import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { DetailSuggComponent } from './detail-sugg/detail-sugg.component';

const routes: Routes = [
  { path: '', component: ListSuggestionComponent },
  {path :'detail/:id' , component : DetailSuggComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
