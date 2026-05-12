import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { DetailSuggComponent } from './detail-sugg/detail-sugg.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';

const routes: Routes = [
  { path: '', component: ListSuggestionComponent },
  {path :'detail/:id' , component : DetailSuggComponent},
  {path :'addSugg', component:SuggestionFormComponent},
  {path :'update/:id', component:SuggestionFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }
